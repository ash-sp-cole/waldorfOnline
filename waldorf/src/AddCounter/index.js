import React, { Component } from 'react';
import Display from '../DisplayCounter';
import {connect} from 'react-redux';

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
export default connect() (AddCounter);