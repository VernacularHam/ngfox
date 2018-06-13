import { TestBed, async, inject } from '@angular/core/testing';

import { SingletonGuardGuard } from './singleton-guard.guard';

describe('SingletonGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingletonGuardGuard]
    });
  });

  it('should ...', inject([SingletonGuardGuard], (guard: SingletonGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
