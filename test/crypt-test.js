const assert = require("assert");
const { encrypt, decrypt } = require("../src/crypt.js");
const str = "Hello World";
const base64 = "SGVsbG8gV29ybGQ=";

describe("Encrypt", () => {
  it("encrypt test 1", () => {
    assert.deepStrictEqual(encrypt(str), base64);
  });
});

describe("Decrypt", () => {
  it("Decrypt test 1", () => {
    assert.deepStrictEqual(decrypt(base64), str);
  });
});
