const mocker = require("../../../src");
const { describe, it } = require("mocha");
const { expect } = require("chai");

const generateSchemaFromTemplate = (minimum, maximum, exclusiveMinimum=false, exclusiveMaximum = false, nullable = false) => ({
  type: "integer",
  minimum,
  maximum,
  exclusiveMinimum,
  exclusiveMaximum,
  nullable
});

describe("unit-tests/data-types/integer", () => {

  it("Generate integer in postive range", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(1, 10));
    expect(generatedValue[0]).to.be.gte(1).and.lte(10);
  });

  it("Generate integer in negative range", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(-10, -1));
    expect(generatedValue[0]).to.be.gte(-10).and.lte(-1);
  });

  it("Generate integer in negative range - exclusive minimum", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(-10, -1, true));
    expect(generatedValue[0]).to.be.greaterThan(-10).and.lte(-1);
  });

  it("Generate integer in negative range - exclusive minimum - exclusive maximum", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(-10, -1, true, true));
    expect(generatedValue[0]).to.be.greaterThan(-10).and.lessThan(-1);
  });

  
  it("Generate integer - no range", () => {
    const generatedValue = mocker(generateSchemaFromTemplate());
    expect(typeof generatedValue[0]).to.be.equal('number');
  });

  it("Generate integer - range - nullable", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(1, 10, false, false, true));
    try {
        expect(generatedValue[0]).to.be.gte(1).and.to.be.lte(10);
    }
    catch(e) {
        expect(generatedValue[0]).to.be.equal(null);
    }
  });
});
