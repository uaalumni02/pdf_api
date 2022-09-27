import express from "express";
import certificateController from "../controllers/certficates";

const router = express.Router();

router
  .route("/")
  .get(certificateController.getCertificate)
  .post(certificateController.addCertficiate);

export default router;
