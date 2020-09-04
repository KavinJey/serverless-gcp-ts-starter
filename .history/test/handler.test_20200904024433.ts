import * as handler from "../handler";
const sinon = require("sinon");

test("hello", async () => {
  const req = {};
  const res = {
    status: sinon.stub().returnsThis(200),
  };

  const callback = (_, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");
  };

  await handler.hello(null, null);
});
