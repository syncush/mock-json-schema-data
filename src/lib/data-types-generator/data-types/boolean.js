const mockData = require('mock-data');
const { nullableWrapper } = require('../../../utils');

module.exports = (schema) => nullableWrapper(schema.nullable, mockData.boolean(schema));
