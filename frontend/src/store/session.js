//TODO: setup all the necessary Redux store actions and reducers
//todo: that are needed for a login page

import { csrfFetch } from './csrf';
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

//////////////////////////////////////////////* ACTION CREATORS ///////////////////////////////////////////////
const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};
const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};




////////////////////////////* THUNK ACTION CREATORS ////////////////////
export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({ credential, password })
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};
export const restoreUser = () => async (dispatch) => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

//////////////////////* DEMO USER THUNK AC //////////////////////
//todo: make a demo user thunk action creator:
export const demoUserLogin = () => async dispatch => {
    //? First grab the demo user from the api
        const res = await csrfFetch("/api/session", {
            method: "POST",
            body: JSON.stringify({
                credential: 'Demo-lition',
                password: 'password'
            })
        })
        //? parse the json, and the dispatch it using the action creator for setting a user.
        const demoData = await res.json()

        dispatch(setUser(demoData.user))

        return res;
}

////////////* LOG OUT THUNK AC */////////////////
export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
};

//* SIGN UP THUNK ACTION CREATOR //
export const signup = (user) => async dispatch => {
    const { firstName, lastName, username, email, password } = user;

    const response = await csrfFetch("/api/users", {
        method: 'POST',
        body: JSON.stringify({
                firstName,
                lastName,
                username,
                email,
                password
        })
    })
    const data = await response.json();
    dispatch(setUser(data.user))
    return response;
}


////////////////////////////////////////////////* SESSION REDUCER ////////////////////////////////////////////////

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};
export default sessionReducer;
