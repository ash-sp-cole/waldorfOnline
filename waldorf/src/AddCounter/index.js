import React, { Component } from 'react';
import Display from '../DisplayCounter';

class AddCounter extends Component {
    render(){
        return (
            <div>

            <h3> add counter</h3>
            <Display
            left={'left'}
            middle={'middle'}
            right={'right'}
            
            />
            </div>
        )
    }
}
export default AddCounter;