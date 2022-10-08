import express from "express";
import certificateController from "../controllers/certficates";

const router = express.Router();

router
  .route("/")
  .get(certificateController.allCertificates)
  .post(certificateController.addCertficiate);

  router
  .route("/:id")
  .get(certificateController.getCertificateById)

export default router;
