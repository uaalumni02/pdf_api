const pdfService = require("../service/pdf-service");

class CertificateController {
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
      console.log(error)
    }
  }
}

export default CertificateController;
