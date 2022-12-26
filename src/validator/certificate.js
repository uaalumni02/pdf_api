const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);

const schema = Joi.object({
  certificateDate: Joi.number().required(),
  Name: Joi.string().min(2).max(30).required(),
  awardType: Joi.objectId(),
});

export default schema;
