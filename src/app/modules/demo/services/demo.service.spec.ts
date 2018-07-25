import { TestBed, inject } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { DemoService } from './demo.service';
import { RestangularModule } from 'ngx-restangular';

describe('DemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoService],
      imports: [
        MockModule(RestangularModule)
      ]
    });
  });

  it('should be created', inject([DemoService], (service: DemoService) => {
    expect(service).toBeTruthy();
  }));
});
