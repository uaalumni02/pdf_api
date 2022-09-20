import express from "express";
import "dotenv/config";
import cors from "cors";
import router from "../routes";

const app = express();
const { log, error } = console;

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => log("server is running"));
export default app;
