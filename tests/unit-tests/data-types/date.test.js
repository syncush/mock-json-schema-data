const mocker = require("../../../src");
const { describe, it } = require("mocha");
const { expect } = require("chai");

const generateSchemaFromTemplate = (start, end, isUTC, format) => ({
  type: "date",
  start,
  end,
  isUTC,
  format
});

const utcRegex = /\b[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}Z\b/;

describe("unit-tests/data-types/date", () => {
  it("isUTC = false", () => {
    const dateString = mocker(generateSchemaFromTemplate(1990, 2000, false));
    expect(utcRegex.test(dateString)).to.be.false;
    expect(new Date(dateString).getFullYear())
      .to.be.gte(1990)
      .and.lte(2000);
  });
  it("isUTC = true", () => {
    const dateString = mocker(generateSchemaFromTemplate(1990, 2000, true));
    expect(utcRegex.test(dateString)).to.be.true;
    expect(new Date(dateString).getUTCFullYear())
      .to.be.gte(1990)
      .and.lte(2000);
  });
});
