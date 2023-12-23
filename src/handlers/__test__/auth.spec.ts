import request from "supertest";
import server from "../..";

afterEach(() => {
  server.close();
});

//supertest POST login success
describe("POST /api/login", () => {
  it("should return 200 and token", async () => {
    const email = "superadmin@gmail.com";
    const password = "12345678";
    const responseGetLogin = await request(server)
      .post("/api/login")
      .set("Accept", "application/json")
      .send({ email, password });
    expect(responseGetLogin.statusCode).toEqual(200);
    expect(responseGetLogin.body.data.token).toEqual(expect.any(String));
  });
});

//supertest POST login failed return 400
describe("POST /api/login", () => {
  it("should return 400", async () => {
    const email = "superadmin@gmail.com";
    const responseGetLogin = await request(server)
      .post("/api/login")
      .set("Accept", "application/json")
      .send({ email });
    expect(responseGetLogin.statusCode).toEqual(400);
  });
});

//supertest POST login failed and return 404
describe("POST /api/login", () => {
  it("should return 404", async () => {
    const email = "superadmin10@gmail.com";
    const password = "12345678";
    const responseGetLogin = await request(server)
      .post("/api/login")
      .set("Accept", "application/json")
      .send({ email, password });
    expect(responseGetLogin.statusCode).toEqual(404);
  });
});

describe("GET /api/current-user", () => {
  it("should return 200 and token", async () => {
    const email = "superadmin@gmail.com";
    const password = "12345678";
    const responseGetLogin = await request(server)
      .post("/api/login")
      .set("Accept", "application/json")
      .send({ email, password });
    const token = responseGetLogin.body.data.token;
    const responseGetCurrentUser = await request(server)
      .get("/api/current-user")
      .set("Authorization", `${token}`);
    expect(responseGetCurrentUser.body.data.current_user.email).toEqual(email);
  });
});
