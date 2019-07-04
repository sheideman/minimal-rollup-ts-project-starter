
import { AppRoot } from './app-root.js';
import chai from 'chai';
customElements.define('app-root', AppRoot);

const { assert } = chai;

describe('AppRoot', () => {
  it('has a title', () => {
    const el = new AppRoot();
    assert.equal(el.title, 'Rollup Starter');
  });
});