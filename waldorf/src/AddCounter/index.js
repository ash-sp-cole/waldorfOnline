import React, { Component } from 'react';
import Display from '../DisplayCounter';
import {connect} from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/col';
import Button from 'react-bootstrap/Button';
class AddCounter extends Component {
    render(){
        return (
            <div>

            <h3> add counter</h3>
          
            <Display
            
            left={this.props.ctr}
            middle={'middle'}
            right={'right'}
            
            />
              <Row style={{margin:'auto'}}>
                <Col> <Button onClick={this.props.onCounterOneMinus}> - </Button>  <Button onClick={this.props.onCounterOneMinus}> + </Button></Col>
                <Col> <Button> - </Button>  <Button> + </Button></Col>
                <Col> <Button> - </Button>  <Button> + </Button></Col>
            </Row>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
return{
    ctr: state.counter1
}
};

const mapDispatchToProps = (dispatch) =>{
    return{
        onCounterOneAdd: () => dispatch({
            type: "ADD_COUNTER1"
        }),
        onCounterOneMinus: () => dispatch ({
            type: "MINUS_COUNTER1"
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddCounter);