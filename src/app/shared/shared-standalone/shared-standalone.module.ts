import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedStandaloneComponent } from './shared-standalone.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedStandaloneComponent
  ],
  exports: [
    SharedStandaloneComponent
  ]
})
export class SharedStandaloneModule { }
