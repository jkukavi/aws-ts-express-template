import express from "express";
import { IO } from "@reactor4/forklift";

import { authorizationSchema } from "./schemas/authorizationSchema";
import { AuthorizationController } from "./controllers";

const router = express.Router();
const authorizationController = new AuthorizationController();
const authorizationIo = new IO({ reqBodySchema: authorizationSchema });

router.post(
  "/",
  authorizationIo.processRequest(),
  authorizationController.getAuthorization(),
  authorizationIo.sendResponse({ skipNextOnSuccess: true })
);

export default router;
