export const weatherSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "Shema Za Prognozu",
  description: "Schema za dobivanje prognoze",
  type: "object",
  properties: {
    city: {
      type: "string",
    },
    time: {
      type: "number",
    },
  },
  additionalProperties: false,
  required: ["city", "time"],
};
