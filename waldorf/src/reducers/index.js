import * as actionTypes from '../actions';

const intialState = {
    data: "test orgiinal state"
}

const reducer = (state = intialState, action ) => {

    if(actionTypes === "SET_TECH") {
        return {...state,
        data: action.text
    }

    }

return state;

}

export default reducer;