import {fail} from "assert";

const hello = require('typescript-cypress-unexpect-token-spread-operator-demo--module1');

describe('cypress', () => {
  it('uses bad hello function', () => {
    try {
      hello();
    } catch (e) {
      console.error(e);
      fail(e);
      throw e;
    }
  })
})
