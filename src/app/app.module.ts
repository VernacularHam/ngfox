import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedTestComponent } from './shared/components/shared-test/shared-test.component';
import { SharedPipePipe } from './shared/pipes/shared-pipe.pipe';
import { SharedDirectiveDirective } from './shared/directives/shared-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    SharedTestComponent,
    SharedPipePipe,
    SharedDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
