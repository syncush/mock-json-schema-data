const mocker = require("../../../src");
const { describe, it } = require("mocha");
const { expect } = require("chai");

const generateSchemaFromTemplate = (nullable = false) => ({
  type: "ipv6",
  nullable
});

const regexIpv6 =
  "(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))";

const checkIpv6 = toCheck => (toCheck.match(regexIpv6) ? true : false);
const expectIpv6 = value => expect(checkIpv6(value)).to.be.true;

describe("unit-tests/data-types/ipv6", () => {
  it("Generate ipv6", () => {
    const generatedValue = mocker(generateSchemaFromTemplate());
    expectIpv6(generatedValue[0]);
  });

  it("Generate ipv6 - nullable", () => {
    const generatedValue = mocker(generateSchemaFromTemplate(true));
    try {
      expectIpv6(generatedValue[0]);
    } catch (e) {
      expect(generatedValue[0]).to.be.equal(null);
    }
  });
});
