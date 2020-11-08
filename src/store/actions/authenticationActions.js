import * as actionTypes from './actionTypes';
import axiosLogin from '../../instances/axios-google-login';
import axiosFireBase from '../../instances/axios-fire-base-data';

const API_KEY = 'AIzaSyAUdFUFFCKqM0pCqX7Wk0jXFUFvx-ysOzQ';

const startAuthLoading = () => {
    return {
        type: actionTypes.START_LOADING_AUTH
    }
}

const endAuthLoading = () => {
    return {
        type: actionTypes.END_LOADING_AUTH
    }
}

const setError = errorText => {
    return {
        type: actionTypes.ERROR,
        payload: {
            error: errorText
        }
    }
}

const saveSession = (userName, token, localId) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            userName: userName,
            idToken: token,
            localId: localId
        }
    };
};

const saveSignUp = (userName, token, localId) => {
    return {
        type: actionTypes.SIGN_UP,
        payload: {
            userName: userName,
            idToken: token,
            localId: localId
        }
    };
};

export const logIn = (authData, onSuccessCallback) => {
    return dispatch => {
        dispatch(startAuthLoading())
        axiosLogin.post('/accounts:signInWithPassword?key=' + API_KEY, authData)
            .then(response => {
                const userEmail = authData.email;
                const token = response.data.idToken;
                const localId = response.data.localId;
                let userSession = {
                    token,
                    userEmail,
                    localId
                };

                userSession = JSON.stringify(userSession);

                localStorage.setItem('userSession', userSession);

                dispatch(saveSession(userEmail, token, localId));
                dispatch(endAuthLoading());

                if (onSuccessCallback) {
                    onSuccessCallback();
                }
            })
            .catch(errorObj => {
                dispatch(setError(errorObj.response.data.error.message));
                dispatch(endAuthLoading());
            })
    }
};

export const signUp = (authData, onSuccessCallback) => {
    return dispatch => {
        dispatch(startAuthLoading());
        axiosLogin.post('/accounts:signUp?key=' + API_KEY, authData)
            .then(response => {
                const userEmail = authData.email;
                const token = response.data.idToken;
                const localId = response.data.localId;
                let userSession = {
                    token,
                    userEmail,
                    localId
                };

                userSession = JSON.stringify(userSession);

                localStorage.setItem('userSession', userSession);
                
                axiosFireBase.put(`users/${localId}.json`, { user: userEmail, rol: "patient" })
                    .then(res => {
                        dispatch(saveSignUp(userEmail, token, localId));
                        dispatch(endAuthLoading());
                        if (onSuccessCallback) {
                            onSuccessCallback();
                        }
                    });
            })
            .catch(errorObj => {
                dispatch(setError(errorObj.response.data.error.message));
                dispatch(endAuthLoading());
            })
    }
};

export const persistAuthentication = () => {
    return dispatch => {
        let userSession = localStorage.getItem('userSession');

        if (!userSession) {
            dispatch(logOut());
        } else {
            userSession = JSON.parse(userSession);

            dispatch(saveSession(userSession.userEmail, userSession.token, userSession.localId));
        }
    }
}

export const logOut = () => {
    localStorage.setItem('userSession', '');
    return {
        type: actionTypes.LOG_OUT
    };
};
export const cleanError = () => {
    return {
        type: actionTypes.ERROR,
        payload: {
            error: ''
        }
    };
};
