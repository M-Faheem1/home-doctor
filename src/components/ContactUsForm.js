import React from 'react'
import FormField from './FormField'

function ContactUsForm() {
  return (
    <div className='contactUsForm'>
      <form>
        <div className='information'>
          <FormField/>
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
