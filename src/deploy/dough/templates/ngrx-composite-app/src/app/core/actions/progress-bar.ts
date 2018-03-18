import { Action } from '@ngrx/store';

export enum ProgressBarActionTypes {
  SHOW = '[@scci-branding/ngrx-composite-app][Progress Bar] Show',
  HIDE = '[@scci-branding/ngrx-composite-app][Progress Bar] Hide',
  TOGGLE = '[@scci-branding/ngrx-composite-app][Progress Bar] Toggle',
  UPDATE = '[@scci-branding/ngrx-composite-app][Progress Bar] Update',
}
export class UpdateSpinner implements Action {
  readonly type = ProgressBarActionTypes.UPDATE;
  constructor(public payload: boolean = false) { }
}

export class ToggleSpinner implements Action {
  readonly type = ProgressBarActionTypes.TOGGLE;
  constructor() { }
}

export class ShowSpinner implements Action {
  readonly type = ProgressBarActionTypes.SHOW;
  constructor() { }
}

export class HideSpinner implements Action {
  readonly type = ProgressBarActionTypes.HIDE;
  constructor() { }
}

export type ProgressBarActions = ShowSpinner | HideSpinner | ToggleSpinner | UpdateSpinner;
