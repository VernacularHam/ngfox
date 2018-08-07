import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedStandaloneComponent } from './shared-standalone.component';

describe('SharedStandaloneComponent', () => {
  let component: SharedStandaloneComponent;
  let fixture: ComponentFixture<SharedStandaloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedStandaloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
