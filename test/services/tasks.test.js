const assert = require('assert');
const app = require('../../src/app');

describe('\'Tasks\' service', () => {
  it('registered the service', () => {
    const service = app.service('tasks');

    assert.ok(service, 'Registered the service');
  });
});
