import {
  gitPullLatest
} from './../src/index';
import {
  expect
} from 'chai';

describe('gitPullLatest', () => {

  it('Returns `hello universe`', () => {
    expect(gitPullLatest()).to.equal('hello universe');
  });

});
