class Db {
  static async addAwardType(model, data) {
    try {
      const addAward = await model({ ...data });
      return addAward.save();
    } catch (error) {
      throw error;
    }
  }
  static async getAllAwardTypes(model) {
    try {
      const allAwardTypes = await model.find({});
      return allAwardTypes;
    } catch (error) {
      throw error;
    }
  }
  static async getAwardTypeById(model, id) {
    try {
      const awardType = await model.findById(id);
      return awardType;
    } catch (error) {
      throw error;
    }
  }
  static async addCertificate(model, data) {
    try {
      const addCertficiate = await model({ ...data });
      return addCertficiate.save();
    } catch (error) {
      throw error;
    }
  }
  static async getCertificateById(model, id) {
    try {
      const certificateById = await model
        .findById(id)
        .populate("awardType")
        .exec();
      return certificateById;
    } catch (error) {
      throw error;
    }
  }
}

export default Db;
