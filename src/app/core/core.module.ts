import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpServiceService } from './services/http/http-service.service';
import { SingletonServiceService } from './services/logic/singleton-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    HttpServiceService,
    SingletonServiceService
  ],
  exports: [
  ]
})
export class CoreModule { }
