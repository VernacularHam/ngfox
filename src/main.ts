import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/* ignore coverage */
if (environment.production) {
  enableProdMode();
}

/* ignore coverage */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
