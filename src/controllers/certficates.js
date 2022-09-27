const pdfService = require("../service/pdf-service");
import Certficate from "../models/certificate";
import Db from "../db/db";

import * as Response from "../helpers/response/response";
import validator from "../validator/certificate";

import moment from "moment";

class CertificateController {
  static async addCertficiate(req, res) {
    const certificateData = { ...req.body };
    console.log(certificateData)
    const certificateTimestamp = moment(
      certificateData.certificateDate,
      "YYYY-MM-DD"
    ).unix();
    certificateData.certificateDate = certificateTimestamp;
    try {
      const result = await validator.validateAsync(certificateData);
      if (!result.error) {
        const certificateInfo = await Db.addCertificate(
          Certficate,
          certificateData
        );
        return Response.responseOkCreated(res, certificateInfo);
      }
    } catch (error) {
      console.log(error)
      return Response.responseServerError(res);
    }
  }

  static async getCertificate(req, res, next) {
    try {
      const stream = res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment;filename=certificate.pdf`,
      });
      pdfService.buildPDF(
        (chunk) => stream.write(chunk),
        () => stream.end()
      );
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}

export default CertificateController;
