import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedDemo1Module } from '../../shared/modules/shared-demo-1/shared-demo-1.module';
import { TestComponent } from './test/test.component';
import { DemoComponent } from './components/demo-component/demo-component.component';
import { DemoService } from './services/demo.service';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedDemo1Module,
    DemoRoutingModule
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
