export const authorizationSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "Autorizacijska shema",
  description: "Shema za autorizaciju",
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
  },
  additionalProperties: false,
  required: ["name", "email"],
};
