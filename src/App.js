import React, { Component } from 'react';
import Form from './Components/Form/Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validEmail: '',
      validPassword: ''
    }
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        [name]: value
      },
      () => { this.formValidation(name, value) }
    )
  }

  formValidation = (name, value) => {
    
    switch (name) {
      
      case 'email':
        const validateEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        let validEmail = validateEmail ? 'is-valid' : 'is-invalid';
        this.setState({ validEmail: validEmail });
        break;

      case 'password':
        this.setState({ validPassword: value.length >= 8 ? 'is-valid' : 'is-invalid' })
        break;

      default: break;
    }
  }

  render() {
    return (
      <div>
        <Form email={this.state.email} psw={this.state.password}
          change={this.handleInputChange}
          validEmail={this.state.validEmail}
          validPassword={this.state.validPassword}
        />
      </div>
    );
  }
}

export default App;
