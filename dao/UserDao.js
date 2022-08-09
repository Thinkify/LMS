const User = require("../models/User");
const { errorCodes } = require("../utils/consts");
const strings = require("../utils/strings.json");

async function registerUser(userProfile) {
  let result = null;

  await User.findOne({ adhaar: userProfile.adhaar }).then(async (user) => {
    if (user) {
      result = {
        message: strings.userAlreadyExists,
        code: 400,
      };
      return result;
    }

    try {
      const newUser = new User({
        email: userProfile.email,
        contact: userProfile.contact,
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        dateOfBirth: userProfile.dateOfBirth,
        adhaar: userProfile.adhaar,
        pan: userProfile.pan,
      });

      const isSaved = await newUser.save();
      if (isSaved) {
        result = {
          message: errorCodes[201],
          code: 201,
          user: {
            newUser,
          },
        };
      } else {
        result = isSaved.errors.message;
      }
    } catch (err) {
      console.log(err);
      result = err;
    }
  });

  return result;
}

async function getAllUsers() {
  let result = null;
  await User.find()
    .then(async (candidates) => {
      result = {
        message: errorCodes[200],
        code: 200,
        candidates,
      };
    })
    .catch((error) => {
      result = {
        message: errorCodes[400],
        code: 400,
        error: error,
      };
    });
  return result;
}

async function getOneUser(adhaar) {
  let result = null;
  await User.find({ adhaar: adhaar })
    .then(async (user) => {
      result = {
        message: errorCodes[200],
        code: 200,
        user,
      };
    })
    .catch((error) => {
      result = {
        message: errorCodes[200],
        code: 200,
        error: error,
      };
    });
  return result;
}

module.exports = {
  registerUser,
  getAllUsers,
  getOneUser,
};
