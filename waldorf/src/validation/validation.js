import React from 'react';





const Validation = (props) => {

let validMessage = " text long enough ";


{
    
    if ( props.size <= 5) {
          validMessage =  'Text too small , please enter more characters' ;
    
        }
    
    }





return (
<div> 

<h5> {validMessage} </h5>
</div>
)
}


export default Validation;