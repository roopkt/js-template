import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { createConfig, INITIAL_OPTIONS, FEATURE_MODULE_CONFIG, FeatureModuleSettings } from './config';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material';
import { SpinnerComponent } from './components/spinner.component';

export const COMPONENTS = [
SpinnerComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    CoreModule.forFeature()
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class FeatureModule {
  public static forFeature(
    settings: FeatureModuleSettings = {}
  ): ModuleWithProviders {
    return {
      ngModule: FeatureModule,
      providers: [
        {
          provide: INITIAL_OPTIONS,
          useValue: settings,
        },
        {
          provide: FEATURE_MODULE_CONFIG,
          deps: [INITIAL_OPTIONS],
          useFactory: createConfig,
        },
      ],
    };
  }
}
