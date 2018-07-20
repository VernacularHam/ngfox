import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTestComponent } from './components/shared-test/shared-test.component';
import { SharedPipePipe } from './pipes/shared-pipe.pipe';
import { SharedDirectiveDirective } from './directives/shared-directive.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedTestComponent,
    SharedPipePipe,
    SharedDirectiveDirective
  ],
  exports: [
    SharedTestComponent,
    SharedPipePipe,
    SharedDirectiveDirective
  ]
})
export class SharedModule { }
