import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RouterStateUrl } from '../shared/utils';
import * as fromRouter from '@ngrx/router-store';
import { State as RootState } from '@scci-branding/rootstate/dist';
import * as fromProgressBar from '../core/reducers/progress-bar';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State extends RootState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  progressBar: fromProgressBar.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: any = {
  router: fromRouter.routerReducer,
  progressBar: fromProgressBar.reducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): any {
  return function (state: State, action: any): State {
    console.log('state before', state);
    console.log('action', action);
    const stateAfter = reducer(state, action);
    console.log('state after', stateAfter);
    return stateAfter;
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

export const getProgressBarState = createFeatureSelector<fromProgressBar.State>('progressBar');

export const isShowProgressBar = createSelector(getProgressBarState, fromProgressBar.isShow);
