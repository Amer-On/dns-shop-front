const defaultState = {
    auth: localStorage.getItem('auth') === 'true' || false,
    login: localStorage.getItem('login') || null
}


export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case "LOG_IN":
            localStorage.setItem('auth', 'true')
            localStorage.setItem('login', action.login)
            return {...state, auth: true, login: action.login}
        case "LOG_OUT":
            localStorage.removeItem('auth')
            localStorage.removeItem('login')
            return {...state, auth: false, login: null}
        default:
            return state
    }
}