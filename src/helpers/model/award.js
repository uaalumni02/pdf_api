const isValidAwardType = (name) => {
  const regExp = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/i;
  return regExp.test(name);
};

export default isValidAwardType;
