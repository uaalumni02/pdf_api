const pdfService = require("../service/pdf-service");
import Certificate from "../models/certificate";
import Db from "../db/db";

import * as Response from "../helpers/response/response";

class GenerateCertificateController {
  static async getCertificateById(req, res) {
    const { id } = req.params;
    try {
      const certificateById = await Db.getCertificateById(Certificate, id);
      const stream = res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment;filename=certificate.pdf`,
      });
      pdfService.buildPDF(
        (chunk) => stream.write(chunk),
        () => stream.end(),
        certificateById
      );
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }
}

export default GenerateCertificateController;
