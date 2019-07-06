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

describe("unit-tests/data-types/date", () => {});
