import * as actionType from '../Actions/actionIndex'
import {updateState} from '../utilities'

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.INCREMENT:
            return updateState(state, {
                counter: state.counter + 1
            })
        case actionType.DECREMENT:
            return updateState(state, {
                counter: state.counter - 1
            })
        case actionType.INCREMENT_5:
            return updateState(state, {
                counter: state.counter + 5
            })
        case actionType.DECREMENT_5:
            return updateState(state, {
                counter: state.counter - 5
            })
        default:
            return state
    }
}

export default counterReducer