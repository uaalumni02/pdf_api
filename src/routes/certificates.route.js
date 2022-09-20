import express from "express";
import certificateController from "../controllers/certficates";

const router = express.Router();

router.route("/").get(certificateController.getCertificate);

export default router;
