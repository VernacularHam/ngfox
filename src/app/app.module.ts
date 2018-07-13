import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedTestComponent } from './shared/components/shared-test/shared-test.component';
import { SharedPipePipe } from './shared/pipes/shared-pipe.pipe';
import { SharedDirectiveDirective } from './shared/directives/shared-directive.directive';
import { RouterState } from './shared/router.state';
import { AppState } from './shared/app.state';

@NgModule({
  declarations: [
    AppComponent,
    SharedTestComponent,
    SharedPipePipe,
    SharedDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
    NgxsModule.forRoot([
      RouterState,
      AppState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
