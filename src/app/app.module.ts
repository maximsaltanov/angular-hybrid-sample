import * as angular from 'angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
import { UIRouterUpgradeModule, NgHybridStateDeclaration } from '@uirouter/angular-hybrid';

import { AppComponent } from './app.component';
import { MainController } from './angularjs/angularjs.component';
import { SelectAll } from './angularjs/directives/select-all.directive';
import { UIRouter } from '@uirouter/core';

angular.module('Directives', []).directive('selectAll', [() => { return new SelectAll(); }]);

const app = angular.module('bbwt25', ['ui.router', 'ui.router.upgrade', 'Services', 'Directives']);

export const states = [
  { 
    name: 'angular', 
    url: '/angular', 
    component: AppComponent,
  },
  { 
    name: 'angularjs', 
    url: '/', 
    component: 'angularjsComponent',
  },  
] as NgHybridStateDeclaration[];

export function config(uiRouter: UIRouter) {  
  uiRouter.urlService.rules.initial({ state: 'angularjs' })
}

app.component('angularjsComponent', { templateUrl: "app/angularjs/index.html", controller: MainController });

// The root Angular module
@NgModule({
  imports: [    
    BrowserModule,    
    UpgradeModule,
    FormsModule,    
    // Provides the @uirouter/angular directives
    UIRouterUpgradeModule.forRoot({ states: states, config: config }),
  ],
  declarations: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    // The DOM must be already be available
    this.upgrade.bootstrap(document.body, [app.name]);
  }
}

// Using AngularJS config block, call `deferIntercept()`.
// This tells UI-Router to delay the initial URL sync (until all bootstrapping is complete)
app.config(['$urlServiceProvider', $urlService => $urlService.deferIntercept()]);