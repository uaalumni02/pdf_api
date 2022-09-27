const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);

const schema = Joi.object({
  certificateDate: Joi.number().required(),
  firstName: Joi.string().min(2).max(15).required(),
  lastName: Joi.string().min(2).max(15).required(),

  awardType: Joi.objectId(),
});

export default schema;
