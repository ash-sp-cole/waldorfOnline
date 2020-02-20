


const initialState = {
    data:'stet initial data value'
}




 const reducer = (state = initialState, action) => {

if (action.type === "ADD_DATA") {
return{
    ...state,
    data:action.payload
}

}
return state;
}

export default reducer;