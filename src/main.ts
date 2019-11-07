import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { UrlService } from '@uirouter/core';
import { NgZone } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

// Manually bootstrap the Angular app
platformBrowserDynamic()
.bootstrapModule(AppModule)
.then(platformRef => {
  // get() UrlService from DI (this call will create all the UIRouter services)
  const url: UrlService = platformRef.injector.get(UrlService);

  // Instruct UIRouter to listen to URL changes
  function startUIRouter() {
    url.listen();
    url.sync();
  }

  const ngZone: NgZone = platformRef.injector.get(NgZone);
  ngZone.run(startUIRouter);
});

