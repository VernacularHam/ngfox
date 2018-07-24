import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Shallow } from 'shallow-render';

import { DemoComponent } from './demo-component.component';
import { DemoModule } from '../../demo.module';

describe('DemoComponent', () => {
  let shallow: Shallow<DemoComponent>;

  beforeEach(() => {
    shallow = new Shallow(DemoComponent, DemoModule);
  });

  it('should create', () => {
    expect(shallow).toBeTruthy();
  });

  it ('renders a CREATE: POST button', async () => {
    const {find} = await shallow.render('<fox-demo-component></fox-demo-component>');

    expect(find('button').nativeElement.innerText).toBe('CREATE: POST');
  });
});
