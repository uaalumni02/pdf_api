import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const { log, error } = console;

const port = process.env.PORT || 3000;

const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DB_URL = process.env.MONGO_URL;

mongoose.connect(DB_URL, (err) => {
  if (err) return console.log("Unable to Connect to MongoDB");
  return console.log("Connection Successful");
});

import certificateRoutes from "./routes/certificates.route";
import awardRoutes from './routes/award.route';
import generateCertificateRoutes from "./routes/generateCertificate.routes";

router.use("/certificate", certificateRoutes);
router.use("/award", awardRoutes);
router.use("/generate_certificate", generateCertificateRoutes);

app.use("/api", router);

app.listen(port, () => log("server is running"));
export default app;
