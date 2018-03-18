import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout.component';
import { NavItemComponent } from './components/nav-item.component';
import { AppComponent } from './containers/app.component';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';
import { BodyComponent } from './components/body.component';
import { ProgressBarContainerComponent } from './containers/progress-bar-container.component';
import { ProgressBarComponent } from './components/progress-bar.component';

export const COMPONENTS = [
  AppComponent,
  LayoutComponent,
  NavItemComponent,
  FooterComponent,
  HeaderComponent,
  BodyComponent,
  ProgressBarComponent,
  ProgressBarContainerComponent
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
