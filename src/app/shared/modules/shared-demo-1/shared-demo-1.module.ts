import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// These are barrel imports
import { SharedTestComponent } from './components';
import { SharedDirectiveDirective } from './directives';
import { SharedTestInterface } from './interfaces';
import { SharedPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedDemo1Module { }
