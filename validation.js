const Joi = require("@hapi/joi");

const registrationValidation = (dataToValidate) => {
  const validationSchema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return validationSchema.validate(dataToValidate);
};

const loginValidation = (dataToValidate) => {
  const loginSchema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return loginSchema.validate(dataToValidate);
};

module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;
