const applicationStatus = {
  initialised: "initialised",
  inProgress: "inProgress",
  completed: "completed",
};

const errorCodes = {
  200: "OK",
  201: "Created",
  202: "Accepted",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  412: "Precondition failed",
  429: "Too many requests",
  500: "Internal Server Error",
  501: "Not Implemented",
  503: "Service Unavailable",
  504: "Gateway Timeout",
};

module.exports = {
  applicationStatus,
  errorCodes,
};
