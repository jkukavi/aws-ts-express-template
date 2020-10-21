import { Request, Response } from "express";
import { IO, asyncMiddleware } from "@reactor4/forklift";

import { getWeatherReport, getTemperature } from "./helpers";

export class WeatherController {
  getWeatherReport() {
    return asyncMiddleware(async (req: Request, res: Response) => {
      const weatherReport = await getWeatherReport(req.body.city);
      IO.setCreated(res, weatherReport);
    });
  }

  getTemperature() {
    return asyncMiddleware(async (req: Request, res: Response) => {
      const weatherReport = await getTemperature(req.body.city);
      IO.setCreated(res, weatherReport);
    });
  }
}
