import { SharedDemo1Module } from './shared-demo-1.module';

describe('SharedDemo1Module', () => {
  let sharedDemo1Module: SharedDemo1Module;

  beforeEach(() => {
    sharedDemo1Module = new SharedDemo1Module();
  });

  it('should create an instance', () => {
    expect(sharedDemo1Module).toBeTruthy();
  });
});
