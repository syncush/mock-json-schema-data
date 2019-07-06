const mocker = require("../../../src");
const { describe, it } = require("mocha");
const { expect } = require("chai");

const generateSchemaFromTemplate = (minLength, maxLength, nullable) => ({
  type: "string",
  minLength,
  maxLength,
  nullable
});

const generateSchemaFromTemplateRegex = (regex, nullable) => ({
  type: "string",
  regex,
  nullable
});

describe("unit-tests/data-types/string", () => {
  it("Generate random string", () => {
    const generatedValue = mocker(generateSchemaFromTemplate());
    expect(typeof generatedValue[0]).to.be.equal("string");
  });

  it("Generate a string with range length", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(1, 10));
    expect(typeof generatedValue[0]).to.be.equal("string");
    expect(generatedValue[0]).length.within(1, 10);
  });

  it("Generate a string with a given regex", () => {
    const regexString = "\\d{1,5}";
    const regex = /\d{1,5}/;
    const generatedValue = mocker(generateSchemaFromTemplateRegex(regexString));
    expect(typeof generatedValue[0]).to.be.equal("string");
    expect(regex.test(generatedValue[0])).to.be.true;
  });

  it("Generate string - range - nullable", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(1, 10, true));
    try {
      expect(generatedValue[0])
        .length.to.be.gte(1)
        .and.lte(10);
    } catch (e) {
      expect(generatedValue[0]).to.be.equal(null);
    }
  });

  it("Generate string - regex - nullable", () => {
    const regex = /\d{1,3}/;
    const regexString = "\\d{1,3}";
    const generatedValue = mocker(
      generateSchemaFromTemplateRegex(regexString, true)
    );
    try {
      expect(typeof generatedValue[0]).to.be.equal("string");
      expect(regex.test(generatedValue[0])).to.be.true;
    } catch (e) {
      expect(generatedValue[0]).to.be.equal(null);
    }
  });
});
