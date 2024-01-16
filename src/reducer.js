import cloneDeep from 'lodash/cloneDeep';

const templateCart = {
    0: {
        title: 'Монитор очень крутой', price: 20990, amount: 1,
        img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d141c4aa928eec2907f8c7802d02bfc7/81d31b6a008e8de2f2a1321f99d80ca971ef432cbba29406a35ef59399396819.jpg.webp'
    },
    1: {
        title: 'Ещё один очень крутой Монитор', price: 50000, amount: 3,
        img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d141c4aa928eec2907f8c7802d02bfc7/81d31b6a008e8de2f2a1321f99d80ca971ef432cbba29406a35ef59399396819.jpg.webp'
    }
}


const defaultState = {
    auth: localStorage.getItem('auth') === 'true' || false,
    login: localStorage.getItem('login') || null,
    // cart: JSON.parse(lsCart) ? lsCart : {1: 1, 2: 2},
    cart: JSON.parse(localStorage.getItem('cart')) || templateCart,
}

// CART
// product_id: amount


export default function reducer(state = defaultState, action) {
    let newCart;
    switch (action.type) {
        case "LOG_IN":
            localStorage.setItem('auth', 'true')
            localStorage.setItem('login', action.login)
            return {...state, auth: true, login: action.login}
        case "LOG_OUT":
            localStorage.removeItem('auth')
            localStorage.removeItem('login')
            return {...state, auth: false, login: null}
        case "BUY_ITEM":
            newCart = cloneDeep(state.cart)
            if (action.item.id in newCart)
                newCart[action.item.id].amount += 1
            else
                newCart[action.item.id] = action.item
            localStorage.setItem('cart', JSON.stringify(newCart))
            return {...state, cart: newCart}
        case "ADD_TO_CART":
            newCart = cloneDeep(state.cart)
            newCart[action.id].amount += 1
            localStorage.setItem('cart', JSON.stringify(newCart))
            return {...state, cart: newCart}
        case "REMOVE_FROM_CART":
            newCart = cloneDeep(state.cart)
            newCart[action.id].amount -= 1
            if (newCart[action.id].amount === 0)
                delete newCart[action.id]
            localStorage.setItem('cart', JSON.stringify(newCart))
            return {...state, cart: newCart}
        case "TOTALLY_REMOVE_FROM_CART":
            newCart = cloneDeep(state.cart)
            delete newCart[action.id]
            localStorage.setItem('cart', JSON.stringify(newCart))
            return {...state, cart: newCart}
        case "UPDATE_CART":
            newCart = action.cart.toString()
            localStorage.setItem('cart', JSON.stringify(newCart))
            return {...state, cart: newCart}
        default:
            return state
    }
}