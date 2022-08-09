const Application = require("../models/Application");
const { errorCodes } = require("../utils/consts");

async function createApplication(applicationData) {
  let result = null;
  try {
    const newApplication = new Booking({
      applicationType: applicationData.applicationType,
      userId: applicationData.userId,
      value: applicationData.value,
      adhaarNumber: applicationData.adhaarNumber,
      pan: applicationData.pan,
    });

    newApplication.save();
    result = {
      message: errorCodes[201],
      code: 201,
      newApplication,
    };
  } catch (err) {
    result = null;
  }
  return result;
}

async function getAllApplications() {
  let result = null;
  await Application.find()
    .then(async (application) => {
      result = {
        message: errorCodes[200],
        code: 200,
        application,
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

async function getOneApplication(applicationId) {
  let result = null;
  await Application.findOne({ _id: applicationId })
    .then(async (application) => {
      result = {
        message: errorCodes[200],
        code: 200,
        application,
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

async function getApplicationByUser(userId) {
  let result = null;
  await Application.findOne({ userId: userId })
    .then(async (application) => {
      result = {
        message: errorCodes[200],
        code: 200,
        application,
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

module.exports = {
  createApplication,
  getAllApplications,
  getOneApplication,
  getApplicationByUser,
};
