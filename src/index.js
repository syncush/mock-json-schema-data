const mocker = require("./lib/mocker");
module.exports = (schema, count = 1) => [...Array(count).keys()].map(() => mocker(schema));
