import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form(props){
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" name="email"
          value={props.email} onChange={props.change}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password" name="password"
          value={props.psw} onChange={props.change}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Form;
