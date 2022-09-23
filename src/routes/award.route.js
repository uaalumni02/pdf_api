import express from "express";

import awardController from "../controllers/award";

const router = express.Router();

router
  .route("/")
  .post(awardController.addAwardType)
  .get(awardController.allAwardTypes);

router.route("/:id").get(awardController.getAwardTypeById);

export default router;
