import React from "react"
function FormInput({
  placeholder,
  type,
  id
}) {
  return (
    <div>
      <input 
        type={type} class="form-control" 
        id={id} 
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormInput
