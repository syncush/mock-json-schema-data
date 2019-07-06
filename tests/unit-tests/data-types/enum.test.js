const mocker = require("../../../src");
const { describe, it } = require("mocha");
const { expect } = require("chai");

const generateSchemaFromTemplate = (items, nullable = false) => ({
  type: "enum",
  items,
  nullable
});

const itemsString = ["pie", "pizza", "burger"];
const itemsInteger = [...Array(10).keys()];
const itemsNumber = [1.1, 1.2, 1.3, 1.4, 1.5];
const itemsBoolean = [true, false];

describe("unit-tests/data-types/enum", () => {
  it("Generate enum - string type", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(itemsString));
    expect(generatedValue[0]).to.be.oneOf(itemsString);
  });

  it("Generate enum - integer type", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(itemsInteger));
    expect(generatedValue[0]).to.be.oneOf(itemsInteger);
  });

  it("Generate enum - number type", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(itemsNumber));
    expect(generatedValue[0]).to.be.oneOf(itemsNumber);
  });

  it("Generate enum - boolean type", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(itemsBoolean));
    expect(generatedValue[0]).to.be.oneOf(itemsBoolean);
  });

  it("Generate enum - one item", () => {
    const items = [true];
    const generatedValue = mocker(generateSchemaFromTemplate(items));
    expect(generatedValue[0]).to.be.equal(items[0]);
  });

  it("Generate enum - mixed types", () => {
      const items = [
        ...itemsInteger,
        ...itemsBoolean,
        ...itemsNumber,
        ...itemsString
      ];
    const generatedValue = mocker(generateSchemaFromTemplate(items));
    expect(generatedValue[0]).to.be.oneOf(items);
  });


  it("Generate integer - nullable", () => {
    const items = [...itemsInteger, ...itemsBoolean, ...itemsNumber, ...itemsString];
    const generatedValue = mocker(generateSchemaFromTemplate(items, true));
    try {
      expect(generatedValue[0]).to.be.oneOf(items);
    } catch (e) {
      expect(generatedValue[0]).to.be.equal(null);
    }
  });
});
