import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {FeatureModule} from '@scci-servicename/featurename';
import { environment } from '../environments/environment';
import { getClientAppSettings } from './client-app-settings';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { AppComponent } from './core/containers/app.component';
import { CoreModule } from './core/core.module';
import { metaReducers, reducers } from './reducers';
import { routes } from './routes';
import { MaterialModule } from './material';

const COMPONENTS = [
  HomeContainerComponent
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(routes, { useHash: true }),

    /**
    * StoreModule.forRoot is imported once in the root module, accepting a reducer
    * function or object map of reducer functions. If passed an object of
    * reducers, combineReducers will be run creating your application
    * meta-reducer. This returns all providers for an @ngrx/store
    * based application.
    */
    StoreModule.forRoot(reducers, { metaReducers }),
    /**
    * @ngrx/router-store keeps router state up-to-date in the store.
    */
    StoreRouterConnectingModule.forRoot({
      /*
        They stateKey defines the name of the state used by the router-store reducer.
        This matches the key defined in the map of reducers
      */
      stateKey: 'router',
    }),
    /**
  * Store devtools instrument the store retaining past versions of state
  * and recalculating new states. This enables powerful time-travel
  * debugging.
  *
  * To use the debugger, install the Redux Devtools extension for either
  * Chrome or Firefox
  *
  * See: https://github.com/zalmoxisus/redux-devtools-extension
  */
    StoreDevtoolsModule.instrument({
      name: 'CompositeApp DevTools',
      logOnly: environment.production,
    }),

    /**
    * EffectsModule.forRoot() is imported once in the root module and
    * sets up the effects class to be initialized immediately when the
    * application starts.
    *
    * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
    */
    EffectsModule.forRoot([]),

    CoreModule.forRoot(),
    FeatureModule.forFeature(getClientAppSettings()),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: COMPONENTS
})
export class AppModule { }
