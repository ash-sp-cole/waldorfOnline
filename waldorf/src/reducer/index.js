

const initialState = {
    counter1: 1,
    counter2: 2,
    counter3: 3
}

const reducer = (state = initialState, action)  => {

    if (action.type === "SET_COUNTER"){
        return{
            ...state,
            counter1 : action.payload
        }
    }
return state;

}

export default reducer;