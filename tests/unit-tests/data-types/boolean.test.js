const mocker = require("../../../src");
const { describe, it } = require("mocha");
const { expect } = require("chai");

const generateSchemaFromTemplate = (nullable = false) => ({
  type: "boolean",
  nullable
});

describe("unit-tests/data-types/boolean", () => {
  it("Generate boolean", () => {
    const generatedValue = mocker(generateSchemaFromTemplate());
    expect(generatedValue[0]).to.be.oneOf([true, false]);
  });

  it("Generate boolean that can be nullable", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(true));
    expect(generatedValue[0]).to.be.oneOf([true, false, null]);
  });
});
