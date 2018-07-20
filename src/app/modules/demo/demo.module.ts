import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Restangular } from 'ngx-restangular';
import { TestComponent } from './test/test.component';
import { DemoComponentComponent } from './components/demo-component/demo-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestComponent, DemoComponentComponent]
})
export class DemoModule { }
