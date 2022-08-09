var express = require("express");
var router = express.Router();
var ApplicationDao = require("../dao/ApplicationDao");

const bodyParser = require("body-parser");
const { errorCodes } = require("../utils/consts");
router.use(bodyParser.urlencoded({ extended: true }));
/* GET home page. */

router.get("/getapplications", async function (req, res, next) {
  await ApplicationDao.getAllApplications().then((response) => {
    console.log("response", response);
    res.status(response.code).json(response);
  });
});

router.post("/createapplication", async function (req, res, next) {
  if (req.body) {
    var applicationData = req.body;
    await ApplicationDao.registerBooking(applicationData).then((response) => {
      console.log("response", response);
      res.status(response.code).json(response);
    });
  } else {
    res.status(412).json({
      Message: errorCodes[412],
    });
  }
});

router.get("/getapplication/:applicationId", async function (req, res, next) {
  if (req.params.applicationId) {
    await ApplicationDao.getOneApplication(req.params.applicationId).then(
      (response) => {
        console.log("response", response);
        res.status(response.code).json(response);
      }
    );
  } else {
    res.status(412).json({
      Message: errorCodes[412],
    });
  }
});

router.get("/getuserapplication/:userId", async function (req, res, next) {
  if (req.params.userId) {
    await ApplicationDao.getOneApplication(req.params.userId).then(
      (response) => {
        console.log("response", response);
        res.status(response.code).json(response);
      }
    );
  } else {
    res.status(412).json({
      Message: errorCodes[412],
    });
  }
});

module.exports = router;
