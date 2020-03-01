import * as actionType from './actionsTypes';

export const increment = () => {
    return {type: actionType.INCREMENT}
}
export const decrement = () => {
    return {type: actionType.DECREMENT}
}
export const increment_5 = () => {
    return {type: actionType.INCREMENT_5}
}
export const decrement_5 = () => {
    return {type: actionType.DECREMENT_5}
}

export const add = (number) => {
    return {type: actionType.ADD, counterValue: number}
}

export const asynchronousFunctionAddition = (number) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(add(number))
        }, 2000)
    }
}

export const deleteItemList = (id) => {
    return {type: actionType.DELETE, id: id}
}