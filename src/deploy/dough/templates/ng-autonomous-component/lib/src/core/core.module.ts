import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const COMPONENTS: any[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forFeature(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
