import { ProgressBarActions, ProgressBarActionTypes } from '../actions/progress-bar';

export class State {
    show: boolean;
}

export const initialState: State = {
    show: false
};

export function reducer(
    state = initialState,
    action: ProgressBarActions
): State {
    switch (action.type) {
        case ProgressBarActionTypes.SHOW: {
            return {
                show: true
            };
        }
        case ProgressBarActionTypes.TOGGLE: {
            return {
                show: !state.show
            };
        }
        case ProgressBarActionTypes.UPDATE: {
            return {
                show: action.payload
            };
        }
        case ProgressBarActionTypes.HIDE: {
            return {
                show: false
            };
        }
        default: {
            return state;
        }
    }
}

export const isShow = (state: State) => state.show;
