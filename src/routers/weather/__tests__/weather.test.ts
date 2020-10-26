import request from "supertest";

import app from "shared/tests/app";

const requestBody = {
  city: "zagreb",
  time: 12,
};

describe("Weather API testing", () => {
  it("/getreport should return string", async () => {
    const response = await request(app)
      .post("/authorization")
      .send(requestBody)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    expect(response.body.message).toBeDefined();
  });

  it("/getreport should return string", async () => {
    const response = await request(app)
      .post("/authorization")
      .send(requestBody)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    expect(response.body.message).toBeDefined();
  });
});
