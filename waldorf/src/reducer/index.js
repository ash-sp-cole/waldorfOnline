

const initialState = {
    counter1: 1,
    counter2: 2,
    counter3: 3
}

const reducer = (state = initialState, action)  => {

    if (action.type === "ADD_COUNTER1"){
        return{
            ...state,
            counter1 : state.counter1 + 1
        }
    }
    else if(action.type ==="MINUS_COUNTER1"){
        return{
            ...state,
            counter1 : state.counter1--
        }
    }
return state;

}

export default reducer;