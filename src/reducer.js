const defaultState = {
    auth: false,
    login: null
}


export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case "LOG_IN":
            return {...state, auth: true, login: action.login}
        case "LOG_OUT":
            return {...state, auth: false, login: null}
        default:
            return state
    }
}