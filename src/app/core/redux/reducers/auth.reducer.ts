import * as StateActions from '../actions/auth.action';
import { User } from 'app/models/user.model';

export type Action = StateActions.All;

export interface ConfigurationState {
    configuration: any;
}

export interface State {
    // is a user authenticated?
    isAuthenticated: boolean;
    // if authenticated, there should be a user object
    user: User | null;
    // error message
    errorMessage: string | null;
    registed: string;
    language: string | null;
    userProfile: User | {};
}

export const initialState: State = {
    isAuthenticated: null,
    user: null,
    errorMessage: null,
    registed: null,
    language: null,
    userProfile: {}
};

export function reducer(state = initialState, action: StateActions.All): any {
    switch (action.type) {
        case StateActions.LOGIN_SUCCESS:
            return {
                ...state, isAuthenticated: true,
                token: action.payload.token
            };
        case StateActions.LOGIN_FAILURE:
            return { ...state, ...action.payload };
        case StateActions.LOGOUT:
            return { ...state, isAuthenticated: false, user: null, token: null };
        case StateActions.REGISTRATIONING:
            return { ...state, isAuthenticated: false, user: null, token: null, registrationing: true, error: '' };
        case StateActions.REGISTRATION_SUCCESS:
            return {
                ...state, isAuthenticated: true, token: action.payload.token
            };
        case StateActions.REGISTRATION_FAILURE:
            return { ...state, ...action.payload, registrationing: false, token: null };
        case StateActions.REFRESH_SUCCESS:
            return {
                ...state, isAuthenticated: true,
                user: {
                    ...action.payload
                }
            };
        default:
            return state;
    }
}
