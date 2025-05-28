export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})*$/;
    return emailRegex.test(email);
};

export default validateEmail;