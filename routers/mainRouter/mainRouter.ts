import weatherIo from "./schemas/weatherSchema";
import controller from "./controller";
import express from "express";
var router = express.Router();

router.get("/", (req, res) => {
  res.send("Authenticated successfuly.");
});

router.post(
  "/weather",
  weatherIo.processRequest(),
  controller.weather,
  weatherIo.sendResponse({ skipNextOnSuccess: true })
);

export default router;
