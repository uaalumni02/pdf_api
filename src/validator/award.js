const Joi = require("@hapi/joi");

const schema = Joi.object({
  awardType: Joi.string().min(3).max(30).required(),
});

export default schema;
