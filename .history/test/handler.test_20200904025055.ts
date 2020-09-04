import * as handler from "../handler";
const sinon = require("sinon");

test("hello", async () => {
  const req = {};
  const res = {
    status: sinon.stub().returnsThis(200),
    send: sinon.stub(),
    statusCode: sinon.stub,
  };

  const response = await handler.hello(req, res);
  console.log(response);
  expect(response.statusCode).toEqual(200);
  expect(typeof response.body).toBe("string");
});
