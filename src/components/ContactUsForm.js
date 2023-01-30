import React from 'react'

function ContactUsForm() {
  return (
    <div className='contactUsForm'>
      <form>
        <div className='information'>
          <div class="form-group name">
            <label for="exampleFormControlInput1">Name</label>
            <div className='inputWrapper'>
              <input 
                type="email" class="form-control" 
                id="exampleFormControlInput1" 
                placeholder="ex: Henry"
              />
            </div>
          </div>
          <div class="form-group email">
            <label for="exampleFormControlInput1">Email</label>
            <div className='inputWrapper'>            
              <input 
                type="email" class="form-control" 
                id="exampleFormControlInput1" 
                placeholder="ex: Henry@mail.com"
              />
            </div>  
          </div>
        </div>
        <div class="form-group message">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea 
            class="form-control" 
            id="exampleFormControlTextarea1" 
            placeholder="ex: I love your company so much!">
          </textarea>
        </div>
        <button className='btn btn-primary'>Send</button>
      </form>
      <div className='imgWraper'>
        <img alt='contactUs' src='./assets/images/contact-us.png'></img>
      </div>
    </div>
  )
}

export default ContactUsForm
