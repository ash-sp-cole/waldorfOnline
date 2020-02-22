import React, { Component } from 'react';
import Display from '../DisplayCounter';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
class AddCounter extends Component {

eventChangeHandler(e) {
    
    const input = document.getElementById('form').value
   
    console.log(input);
    
}


    render() {
        return (
            <div>

                <h3> add counter</h3>

                <Display

                    left={this.props.ctr}
                    middle={'middle'}
                    right={'right'}

                />
                <Row style={{ margin: 'auto' }}>
                    <Col> <Button onClick={this.props.onCounterOneMinus}> - </Button>  <Button onClick={this.props.onCounterOneAdd}> + </Button></Col>
                    <Col>
                        <InputGroup className="mb-3" >
                            <FormControl
                                placeholder="Search......"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                id="form"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary"  onClick={this.props.onAddNewData} >Submit</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                    <Col> 
                    {this.props.inputProp}
                    
                     </Col>
                </Row>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ctr: state.counter1,
        inputProp: state.counter2
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCounterOneAdd: () => dispatch({
            type: "ADD_COUNTER1"
        }),
        onCounterOneMinus: () => dispatch({
            type: "MINUS_COUNTER1"
        }),
        onAddNewData: () => dispatch({
            type: "ADD_DATA",
            payload: document.getElementById('form').value
      
        })
       
    }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCounter);