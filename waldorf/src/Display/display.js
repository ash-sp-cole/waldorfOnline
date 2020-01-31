import React from 'react';



const Display = (props) => {

    return (


        <div>

            <h3> the student you are looking for is : </h3>
           
            <br />
         
            <h5> {props.name}</h5>
        </div>

    )


}

export default Display;