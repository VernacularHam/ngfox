import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Shallow } from 'shallow-render/dist';

import { DemoComponent } from './demo-component.component';
import { DemoModule } from '../../demo.module';
import { DemoService } from '../../services/demo.service';
import { of } from 'rxjs';

describe('DemoComponent', () => {
  let shallow: Shallow<DemoComponent>;

  beforeEach(() => {
    shallow = new Shallow(DemoComponent, DemoModule);
  });

  it('should create', () => {
    expect(shallow).toBeTruthy();
  });

  it ('renders four buttons', async () => {
    const {find} = await shallow.render('<fox-demo-component></fox-demo-component>');

    expect(find('button')).toHaveFound(4);
  });
});
