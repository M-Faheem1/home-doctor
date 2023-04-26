import React from 'react'
import FormInput from './FormInput'

function FormField() {
  return (
    <>
    <div class="form-group name">
      <label for="exampleFormControlInput1">Name</label>
      <div className='inputWrapper'>
        <FormInput
          id="formControlInputName"
          type="text"
          placeholder="ex: Henry"
        />
      </div>
    </div>
    <div class="form-group email">
      <label for="exampleFormControlInput1">Email</label>
      <div className='inputWrapper'>
        <FormInput
          id="formControlInputEmail"
          type="email"
          placeholder="ex: Henry@mail.com"
        />
      </div>
    </div>
  </>
  )
}

export default FormField
