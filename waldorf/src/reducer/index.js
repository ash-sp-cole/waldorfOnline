

const initialState = {
    counter1: 1,
    counter2: "",
    counter3: "..."
}

const reducer = (state = initialState, action)  => {
console.log(state.counter3, "reducer")
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
      
        return{
            ...state, 
             counter3:action.payload,
           
        }
     
    }
  
    

return state;

}

export default reducer;