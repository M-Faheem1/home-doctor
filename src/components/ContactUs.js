import React from 'react'
import ContactUsForm from './ContactUsForm'

function ContactUs() {
  return (
    <div className='contactUS'>
      <div className='contactUsDescription'>
        <h4>Contact us</h4>
        <p>
          If you have any additional questions or suggestings, 
          don’t hesitate to leave your message here
        </p>
      </div>
    <ContactUsForm/>
    </div>
  )
}

export default ContactUs
