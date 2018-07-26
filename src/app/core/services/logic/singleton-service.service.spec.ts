import { TestBed, inject } from '@angular/core/testing';

import { SingletonServiceService } from './singleton-service.service';

describe('SingletonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingletonServiceService]
    });
  });

  it('should be created', inject([SingletonServiceService], (service: SingletonServiceService) => {
    expect(service).toBeTruthy();
  }));
});
