import React from 'react';


const Search = (props) => {

return (


<div>
    <h1> Student search </h1>

    <input type="text" onChange = {props.searchStudent} >
  
    </input>

</div>


)

}

export default Search;