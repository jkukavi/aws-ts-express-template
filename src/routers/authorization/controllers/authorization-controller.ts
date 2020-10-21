import { Request, Response } from "express";
import { asyncMiddleware, IO } from "@reactor4/forklift";

export class AuthorizationController {
  getAuthorization() {
    return asyncMiddleware(async (req: Request, res: Response) => {
      IO.setCreated(res, { message: "Authorized successfuly." });
    });
  }
}
