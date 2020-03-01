import * as actionType from '../Actions/actionIndex'
import {deleteItemInArr, addObjectToArr} from '../utilities';

const initialState = {
    recordCounter: []
}

const recordCounterReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.DELETE:
            return deleteItemInArr(state, action.id);
        case actionType.ADD:
            return addObjectToArr(state, action.counterValue)
        default:
            return state
    }
}

export default recordCounterReducer