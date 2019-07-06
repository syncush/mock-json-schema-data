const mocker = require("../../../src");
const { describe, it } = require("mocha");
const { expect } = require("chai");

const generateSchemaFromTemplate = (nullable = false) => ({
  type: "ipv4",
  nullable
});

const checkIpv4 = toCheck => /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(toCheck);
const expectIpv4 = value => expect(checkIpv4(value)).to.be.true;

describe("unit-tests/data-types/ipv4", () => {
  it("Generate ipv4", () => {
    const generatedValue = mocker(generateSchemaFromTemplate());
    expectIpv4(generatedValue[0]);
  });

  it("Generate ipv4 - nullable", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(true));
    try {
      expectIpv4(generatedValue[0]);
    } catch (e) {
      expect(generatedValue[0]).to.be.equal(null);
    }
  });
});
