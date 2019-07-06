const mocker = require("../../../src");
const { describe, it } = require("mocha");
const { expect } = require("chai");

const generateSchemaFromTemplate = (nullable = false) => ({
  type: "uuid4",
  nullable
});

const checkUuid4 = toCheck =>
  toCheck.match(
    "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"
  )
    ? true
    : false;
const expectUuid4 = value => expect(checkUuid4(value)).to.be.true;

describe("unit-tests/data-types/uuid4", () => {
  it("Generate uuid4", () => {
    const generatedValue = mocker(generateSchemaFromTemplate());
    expectUuid4(generatedValue[0]);
  });

  it("Generate uuid4 - nullable", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(true));
    try {
      expectUuid4(generatedValue[0]);
    } catch (e) {
      expect(generatedValue[0]).to.be.equal(null);
    }
  });
});
