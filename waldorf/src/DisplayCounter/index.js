import React from 'react';
import Col from 'react-boots'
const Display = (props) => {
    return(
        <div>
            <h3>
                Display
            </h3>
            <br/>
            <Col >
             <div className="box">
                 <h3> left counter is</h3>
                 {props.left}
             </div>
             </Col>
             <Col>
             <div className="box">
                 <h3> middle counter is</h3>
                 {props.left}
             </div>
             </Col>
             <Col>
             <div className="box">
                 <h3> right counter is</h3>
                 {props.left}
             </div>
             </Col>
        </div>
    )
}

export default Display;
