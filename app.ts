import express from 'express';
import { errorMiddleware } from '@reactor4/forklift';

import auth from './middleware/auth';
import mainRouter from './routers/mainRouter/mainRouter';
import pageNotFound from './middleware/pageNotFound';

const app = express();

app.use(express.json());

app.use(auth);

app.use("/", mainRouter);
app.use("*", pageNotFound);
app.use(errorMiddleware());

export default app;
