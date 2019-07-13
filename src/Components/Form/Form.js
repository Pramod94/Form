import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Constants from '../../Constants';

function Form(props) {
  return (
    <div>
      <form>
        <div className={Constants.bootstrap_class}>
          <label>{Constants.email_lable}</label>
          <input type={Constants.email_type} className={`${Constants.formClassName} ${props.validEmail}`} 
          placeholder={Constants.email_placeholder} name={Constants.email_name}
          value={props.email} onChange={props.change}
          />
          <div className={Constants.bootstrap.valid_feedback}>
            {Constants.success}
          </div>
          <div className={Constants.bootstrap.invalid_feedback}>
            {Constants.wrong_email}
          </div>
        </div>

        <div className={Constants.bootstrap_class}>
          <label>{Constants.pasword_lable}</label>
          <input type={Constants.password_type} className={`${Constants.formClassName} ${props.validPassword}`} 
          placeholder={Constants.password_placeholder} name={Constants.password_name}
            value={props.psw} onChange={props.change}
          />
          <div className={Constants.bootstrap.valid_feedback}>
          {Constants.success}
          </div>
          <div className={Constants.bootstrap.invalid_feedback}>
            {Constants.wrong_password}
          </div>
        </div>
        
        <button className={Constants.button}
          disabled={!(props.validEmail === Constants.button_validation && 
          props.validPassword === Constants.button_validation)}>
          {Constants.button_value}
        </button>
      </form>
    </div >
  )
}

export default Form;
