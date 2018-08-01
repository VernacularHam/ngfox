import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// These are barrel imports
import { SharedTestComponent } from './components';
import { SharedDirective } from './directives';
import { SharedPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedTestComponent,
    SharedDirective,
    SharedPipe
  ],
  exports: [
    SharedTestComponent,
    SharedDirective,
    SharedPipe
  ]
})
export class SharedDemo1Module { }
