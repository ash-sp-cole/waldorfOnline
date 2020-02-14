import { SET_TECH } from "./action-types";

const setTech =(text) =>{
    console.log("test action" + text);
    return{
        type:SET_TECH,
        text
}
}
export default setTech;