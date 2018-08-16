import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LazyParentComponent]
})
export class LazyTestModule { }
