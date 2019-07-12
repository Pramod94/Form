import React, { Component } from 'react';
import Form from './Components/Form/Form';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        [name] : value
      }
    )
  }

  render() {
    return (
      <div>
       <Form email={this.state.email} psw={this.state.password}
       change={this.handleInputChange}
       />
      </div>
    );
  }
}

export default App;
