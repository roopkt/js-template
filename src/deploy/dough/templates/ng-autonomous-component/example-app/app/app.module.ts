import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FeatureModule } from '@scci-servicename/featurename';

import { AppComponent } from './core/containers/app.component';
import { CoreModule } from './core/core.module';
import { HomeContainerComponent } from './home/containers/home-container.component';
import { MaterialModule } from './material';
import { routes } from './routes';

const COMPONENTS = [
  HomeContainerComponent,
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    CoreModule.forRoot(),
    FeatureModule.forFeature(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: COMPONENTS,
})
export class AppModule { }
