const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

const validateContact = (req, res, next) => {
  console.log(req.body);
  const { error } = productSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: error.message,
    });
  }
  next();
};

module.exports = validateContact;
