import express from "express";
import { errorMiddleware } from "@reactor4/forklift";

import auth from "middleware/auth";
import authorizationRouter from "routers/authorization";
import weatherRouter from "routers/weather";
import pageNotFound from "middleware/pageNotFound";

const app = express();

app.use(express.json());

app.use(auth);

app.use("/authorization", authorizationRouter);
app.use("/weather", weatherRouter);

app.use("*", pageNotFound);
app.use(errorMiddleware());

export default app;
