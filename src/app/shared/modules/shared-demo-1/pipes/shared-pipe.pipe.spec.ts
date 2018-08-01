import { SharedPipe } from './shared-pipe.pipe';

describe('SharedPipe', () => {
  it('create an instance', () => {
    const pipe = new SharedPipe();
    expect(pipe).toBeTruthy();
  });
});
