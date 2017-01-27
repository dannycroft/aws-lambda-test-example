const singleAll = require('./singleAll-test');
const multiShow = require('./multiShow-test');
const multiCreate = require('./multiCreate-test');

describe('Lambda Test', () => {
  singleAll({ e: './test/mock/event', fn: './single', handler: 'handler' });
  multiShow({ e: './test/mock/event', fn: './multiShow', handler: 'handler' });
  multiCreate({ e: './test/mock/event', fn: './multiCreate', handler: 'handler' });
});
