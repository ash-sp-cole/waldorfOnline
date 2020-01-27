import React from 'react';



const Display = (props) => {

    return (


        <div>

            <h3> the student you are looking for is : </h3>
            <h5> {props.name}</h5>
            <br />
            <h5> {props.student} </h5>

        </div>

    )


}

export default Display;