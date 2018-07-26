import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Restangular, RestangularModule } from 'ngx-restangular';

import { SharedModule } from '../../shared/shared.module';
import { TestComponent } from './test/test.component';
import { DemoComponent } from './components/demo-component/demo-component.component';
import { DemoService } from './services/demo.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RestangularModule
  ],
  declarations: [
    TestComponent,
    DemoComponent
  ],
  providers: [
    DemoService
  ],
  exports: [
    DemoComponent
  ]
})
export class DemoModule { }
