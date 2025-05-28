export const validatePassword = (pw) => {
  const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  return pwRegex.test(pw);
};

export default validatePassword;
