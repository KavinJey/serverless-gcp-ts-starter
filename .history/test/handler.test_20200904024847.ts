import * as handler from "../handler";
const sinon = require("sinon");

test("hello", async () => {
  const req = {};
  const res = {
    statusCode: sinon.stub().returnsThis(200),
    send: sinon.stub(),
  };

  const response = await handler.hello(req, res);
  expect(response.statusCode).toEqual(200);
  expect(typeof response.body).toBe("string");
});
