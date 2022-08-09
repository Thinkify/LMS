var express = require("express");
var router = express.Router();
var UserDao = require("../dao/UserDao");
const bodyParser = require("body-parser");
const { errorCodes } = require("../utils/consts");

router.use(bodyParser.urlencoded({ extended: true }));
/* GET home page. */

router.get("/getusers", async function (req, res, next) {
  await UserDao.getAllUsers().then((response) => {
    console.log("response", response);
    res.status(response.code).json(response);
  });
});

router.post("/registeruser", async function (req, res, next) {
  if (req.body) {
    var userProfile = req.body;
    await UserDao.registerUser(userProfile).then((response) => {
      console.log("response", response);
      res.status(response.code).json(response);
    });
  } else {
    res.status(412).json({
      Message: errorCodes[412],
    });
  }
});

router.get("/getuser/:emailid", async function (req, res, next) {
  if (req.params.emailid) {
    await UserDao.getOneUser(req.params.emailid).then((response) => {
      console.log("response", response);
      res.status(response.code).json(response);
    });
  } else {
    res.status(412).json({
      Message: errorCodes[412],
    });
  }
});

module.exports = router;
