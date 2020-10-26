import request from "supertest";

import app from "shared/tests/app";

describe("Authorization router testing", () => {
  it("should pass authorization", async () => {
    const requestBody = { name: "jozo", email: "jozo@bla" };

    const response = await request(app)
      .post("/authorization")
      .send(requestBody)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    expect(response.body.message).toBe("Authorized successfuly.");
  });
});
