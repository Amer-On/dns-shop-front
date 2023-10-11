const defaultState = {
    auth: false,
}


export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case "LOG_IN":
            return {...state, auth: true}
        case "LOG_OUT":
            return {...state, auth: false}
        default:
            return state
    }
}