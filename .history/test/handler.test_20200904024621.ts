import * as handler from "../handler";
const sinon = require("ts-sinon");

test("hello", async () => {
  const req = {};
  const res = {
    status: sinon.stub().returnsThis(200),
  };

  const response = await handler.hello(req, res);
  expect(response.statusCode).toEqual(200);
  expect(typeof response.body).toBe("string");
});
