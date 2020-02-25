

const initialState = {
    counter1: 1,
    counter2: "enter city",
    storeTemp: [],
    storeCityName : ""
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
      
        return  { ...state,
        storeCityName: action.payload
        }
    }
    else if(action.type ==="ADD_API_TEMP"){
      
        return  { ...state,
        storeTemp : action.payload
        }
    }
    

return state;

}

export default reducer;