const responseOkCreated = (res, data) => {
  return res.status(201).json({
    success: true,
    message: "added",
    data,
  });
};

const responseServerError = (res) => {
  return res.status(500).json({
    success: false,
    message: "internal server error",
  });
};
const responseOk = (res, data) => {
  return res.status(200).json({
    success: true,
    data,
  });
};
const responseNotFound = (res) => {
  return res.status(404).json({
    success: false,
    message: "Unable to show response",
  });
};

export { responseOkCreated, responseServerError, responseNotFound, responseOk };
