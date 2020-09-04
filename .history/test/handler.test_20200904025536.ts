import * as handler from "../handler";
const sinon = require("sinon");
const assert = require("assert");

test("hello", async () => {
  const req = {};
  const res = {
    status: sinon.stub().returnsThis(200),
    send: sinon.stub(),
  };

  handler.hello(req, res);

  assert.ok(res.send.calledOnce);
  assert.deepStrictEqual(res.send.firstCall.args, [
    "Hello World! Let's start Typescript!!",
  ]);
});
