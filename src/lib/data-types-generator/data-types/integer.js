const mockData = require('mock-data');
const {nullableWrapper} = require('../../../utils');

module.exports = (schema) => {
  const { exclusiveMinimum, exclusiveMaximum } = schema;
  const { minimum, maximum } = schema;
  const { nullable } = schema;
  return nullableWrapper(
    nullable,
    mockData.integer({
      start: exclusiveMinimum ? minimum + 1 : minimum,
      end: exclusiveMaximum ? maximum - 1 : maximum
    })
  );
};
