import { IO } from '@reactor4/forklift';
import getWeatherReport from './helpers/getWeatherReport';

export default async function weatherLogic(req, res, next) {
  const weatherReport = await getWeatherReport(req.body.city);
  IO.setCreated(res, weatherReport);
  next();
};
