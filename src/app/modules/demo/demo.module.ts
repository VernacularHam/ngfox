import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Restangular } from 'ngx-restangular';

import { SharedModule } from '../../shared/shared.module';
import { TestComponent } from './test/test.component';
import { DemoComponentComponent } from './components/demo-component/demo-component.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TestComponent,
    DemoComponentComponent
  ],
  exports: [
    DemoComponentComponent
  ]
})
export class DemoModule { }
