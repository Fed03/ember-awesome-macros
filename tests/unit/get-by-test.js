import Ember from 'ember';
import getBy from 'ember-awesome-macros/get-by';
import { module, test } from 'qunit';

const {
  get, set
} = Ember;

const Obj = Ember.Object.extend({
  model: {
    testProp1: 'test val 1',
    testProp2: 'test val 2'
  },
  source: 'testProp1',
  test: getBy('model', 'source')
});

let obj;

module('Unit | Macro | get by', {
  beforeEach() {
    obj = Obj.create();
  }
});

test('default', function(assert) {
  assert.expect(1);

  assert.strictEqual(get(obj, 'test'), 'test val 1');
});

test('handles property changes', function(assert) {
  assert.expect(1);

  set(obj, 'source', 'testProp2');

  assert.strictEqual(get(obj, 'test'), 'test val 2');
});
