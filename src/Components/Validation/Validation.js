import React from 'react';

function Validation(props) {
  return (
    <div>
      { !props.validEmail && 
  <div>
     <label for="validationServer03">City</label>
      <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required />
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
}
     
    </div>
  )
}

export default Validation;