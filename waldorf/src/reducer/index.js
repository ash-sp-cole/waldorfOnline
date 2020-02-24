

const initialState = {
    counter1: 1,
    counter2: ["results...."],
    counter3: ""
}

const reducer = (state = initialState, action)  => {
  console.log('reducer value ',state.counter3);
    if (action.type === "ADD_COUNTER1"){
        return{
            ...state,
            counter1 : state.counter1 + 1
        }
    }
    else if(action.type ==="MINUS_COUNTER1"){
        return{
            ...state,
            counter1 : state.counter1 -1
        }
    }
    else if(action.type ==="ADD_DATA"){
        return{
            ...state,
            counter2 : action.payload
        }
    }
    else if(action.type ==="ADD_API"){
        return Object.assign({}, state, action.payload)
       
    }
    

return state;

}

export default reducer;