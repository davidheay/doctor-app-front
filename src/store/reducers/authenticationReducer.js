import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    isUserLoggedIn: false,
    userLoggedIn: {
        userName: '',
        idToken: '',
        localId: ''
    },
    loadingAuth: false,
    error: ''
}

const login = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            userName: action.payload.userName,
            idToken: action.payload.idToken,
            localId: action.payload.localId
        }
    });
}

const signUp = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            userName: action.payload.userName,
            idToken: action.payload.idToken,
            localId: action.payload.localId
        }
    });
}

const logOut = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: false,
        userLoggedIn: {
            userName: '',
            idToken: '',
            localId: ''
        }
    });
}
const setError = (state, action) => {
    let textError = '';
    switch (action.payload.error) {
        case 'INVALID_EMAIL':
            textError = 'Verifica tu correo';
            break;
        case 'MISSING_PASSWORD':
            textError = 'Verifica tu contraseña';
            break;
        case 'EMAIL_NOT_FOUND':
        case 'INVALID_PASSWORD':
            textError = 'Verifica tu correo o contraseña';
            break;
        case 'EMAIL_EXISTS':
            textError = 'Parece que este correo ya existe';
            break;
        default:
            if (action.payload.error.includes("WEAK_PASSWORD"))
                textError = "Tu contraseña es muy debil, debe contener al menos 6 caracteres";
            else if (action.payload.error !== textError)
                textError = "Ups, ha ocurrido un error";
            break;
    }
    return updateObject(state, {
        error: textError
    });
}

const startLoading = (state, action) => {
    return updateObject(state, { loadingAuth: true });
}

const endLoading = (state, action) => {
    return updateObject(state, { loadingAuth: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return login(state, action);
        case actionTypes.SIGN_UP: return signUp(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        case actionTypes.START_LOADING_AUTH: return startLoading(state, action);
        case actionTypes.END_LOADING_AUTH: return endLoading(state, action);
        case actionTypes.ERROR: return setError(state, action);
        default: return state;
    }
}

export default reducer;
