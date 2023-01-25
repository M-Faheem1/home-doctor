import React from 'react'

function OurMission() {
  return (
    <div className='ourMission'>
      <h4> Our Mission </h4>
      <div className='ourMissionDescription'>
      <div className='imageWrapper'>
        <img src='./assets/images/advertising.png' alt='screw advertising'></img>
      </div>
      <div className='ourMissionDetail'>
        <h5>Screw advertising</h5>
        <p>
          Don't get us wrong. Every now and then advertising is useful, 
          allowing you to find out about new products that you might have
          never heard of otherwise. But so much of it is creating demand 
          for products you don't need. 
        </p>
        <p>
          And even if it's a product you need, is the one spending all this 
          money on advertising to you really the one with the best product? 
          That's why we launched HomeDoctor, a platform that “prescribes” 
          the right products, just for you. We are an expert-led, 
          data-focused product recommendations platform that doesn't have 
          time for long winded articles. We present all of our recommendations
          concisely and with data visualizations, taking in inputs from you to
          give you a single answer.
        </p>
      </div>
      </div>
    </div>
  )
}

export default OurMission
