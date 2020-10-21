import express from "express";
import { IO } from "@reactor4/forklift";

import { WeatherController } from "./controllers";
import { weatherSchema } from "./schemas/weatherSchema";

const router = express.Router();
const weatherController = new WeatherController();
const weatherIo = new IO({ reqBodySchema: weatherSchema });

router.post(
  "/getTemperature",
  weatherIo.processRequest(),
  weatherController.getTemperature(),
  weatherIo.sendResponse({ skipNextOnSuccess: true })
);

router.post(
  "/getReport",
  weatherIo.processRequest(),
  weatherController.getWeatherReport(),
  weatherIo.sendResponse({ skipNextOnSuccess: true })
);

export default router;
