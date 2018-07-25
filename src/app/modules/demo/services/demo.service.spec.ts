import { TestBed, inject } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { DemoService } from './demo.service';
import { Restangular } from 'ngx-restangular';

describe('DemoService', () => {
  let restangularSpy: jasmine.SpyObj<Restangular>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Restangular', ['one']);

    TestBed.configureTestingModule({
      providers: [DemoService,
      { provide: Restangular, useValue: spy}]
    });

    restangularSpy = TestBed.get(Restangular);
  });

  it('should be created', inject([DemoService], (service: DemoService) => {
    expect(service).toBeTruthy();
  }));
});
