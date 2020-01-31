import React, { Component } from 'react';
import Display from "./Display/display";
import Search from './search';
import Validation from './validation/validation';
import Char from './charComponent/char';


class App extends Component {

state = {
userInput: ''


}



inputChangeHandler = (e)=>{

this.setState({
  userInput: e.target.value
})



}

deleteChangeHandler = (index) =>{


const text = this.state.userInput.split('');
text.splice(index,1);
const updateText = text.join('');
this.setState({
  userInput: updateText
})

}






render(){

const charList = this.state.userInput.split('').map((ch, index) => {

  return <Char  
  character={ch} 
  key={index}
  clicked={()=> this.deleteChangeHandler(index)}
  />



});


return (

<div>

 <input type ='text' 
 onChange= {this.inputChangeHandler} 
  value={this.state.userInput}></input> 
  <p> 

    INLINE INPUT : 
    {this.state.userInput}
    <hr/>
  </p>
  <Display name={this.state.userInput}/>

  <Validation size = {this.state.userInput.length}/>
   {charList}
</div>


)



}

}

export default App;