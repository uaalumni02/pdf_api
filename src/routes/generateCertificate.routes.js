import express from "express";
import generateCertificateController from "../controllers/generateCertificate";

const router = express.Router();

router.route("/:id").get(generateCertificateController.getCertificateById);

export default router;
