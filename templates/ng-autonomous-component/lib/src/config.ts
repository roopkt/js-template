import { InjectionToken } from '@angular/core';

export class FeatureModuleConfig {
  constructor(public width: string) {}
}

export const FEATURE_MODULE_CONFIG = new InjectionToken<
  FeatureModuleConfig
>('@scci-servicename/featurename Config');

export const INITIAL_OPTIONS = new InjectionToken<FeatureModuleConfig>(
  '@scci-servicename/featurename Initial Options'
);

export function createConfig(
  _config: FeatureModuleConfig
): FeatureModuleConfig {
  const DEFAULT_SETTINGS: FeatureModuleConfig = {
    width: '200px',
  };
  const initialSettings = _config;
  const config = Object.assign({}, DEFAULT_SETTINGS, initialSettings);
  return config;
}

export type FeatureModuleSettings =
  | Partial<FeatureModuleConfig>
  | (() => Partial<FeatureModuleConfig>);
