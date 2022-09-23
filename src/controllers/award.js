import Db from "../db/db";
import Award from "../models/award";

import validator from "../validator/award";
import * as Response from "../helpers/response/response";

class AwardData {
  static async addAwardType(req, res) {
    const awardData = { ...req.body };
    try {
      const result = await validator.validateAsync(awardData);
      if (!result.error) {
        const awardType = await Db.addAwardType(Award, awardData);
        return Response.responseOkCreated(res, awardType);
      }
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async allAwardTypes(req, res) {
    try {
      const allAwardTypes = await Db.getAllAwardTypes(Award);
      return Response.responseOk(res, allAwardTypes);
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }
  static async getAwardTypeById(req, res) {
    const { id } = req.params;
    try {
      const AwardTypeById = await Db.getAwardTypeById(Award, id);
      return Response.responseOk(res, AwardTypeById);
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }
}

export default AwardData;
