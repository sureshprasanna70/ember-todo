import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | todos/complete', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:todos/complete');
    assert.ok(route);
  });
});
