import basicAuth from "express-basic-auth";

export default basicAuth({
  users: {
    zelena: process.env.ZELENA_JABUKA_PASSWORD,
  },
  unauthorizedResponse: "Unauthorized, sorry.",
});
