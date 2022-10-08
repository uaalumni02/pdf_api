const pdfService = require("../service/pdf-service");
import Certificate from "../models/certificate";
import Db from "../db/db";

import * as Response from "../helpers/response/response";
import validator from "../validator/certificate";

import moment from "moment";

class CertificateController {
  static async addCertficiate(req, res) {
    const certificateData = { ...req.body };
    const certificateTimestamp = moment(
      certificateData.certificateDate,
      "YYYY-MM-DD"
    ).unix();
    certificateData.certificateDate = certificateTimestamp;
    try {
      const result = await validator.validateAsync(certificateData);
      if (!result.error) {
        const certificateInfo = await Db.addCertificate(
          Certificate,
          certificateData
        );
        return Response.responseOkCreated(res, certificateInfo);
      }
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async getCertificateById(req, res) {
    const { id } = req.params;
    try {
      const certificateById = await Db.getCertificateById(Certificate, id);
      return Response.responseOk(res, certificateById);
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }
  static async allCertificates(req, res) {
    try {
      const allCertificates = await Db.getAllCertificates(Certificate);
      return Response.responseOk(res, allCertificates);
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }
}

export default CertificateController;
