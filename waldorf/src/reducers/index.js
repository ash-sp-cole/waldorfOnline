const rootReducer = (state,action) => {
console.log("test reducer");
if (action.type === "SET_TECH"){

    return {
    ...state,
        tech : action.text

    }



}

return state;

}
export default rootReducer;