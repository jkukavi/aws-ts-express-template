import basicAuth from "express-basic-auth";
import getUsers from "./getUsers";

export default basicAuth({
  users: getUsers(),
  unauthorizedResponse: "Unauthorized, sorry.",
});
