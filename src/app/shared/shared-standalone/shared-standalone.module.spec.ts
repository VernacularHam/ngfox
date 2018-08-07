import { SharedStandaloneModule } from './shared-standalone.module';

describe('SharedStandaloneModule', () => {
  let sharedStandaloneModule: SharedStandaloneModule;

  beforeEach(() => {
    sharedStandaloneModule = new SharedStandaloneModule();
  });

  it('should create an instance', () => {
    expect(sharedStandaloneModule).toBeTruthy();
  });
});
