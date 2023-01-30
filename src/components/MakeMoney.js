import React from 'react'

function MakeMoney() {
  return (
    <div className='makeMoney'>
      <div className='imgWrapper'>
        <img alt='strategy' src='./assets/images/make-money.png'></img>
      </div>
      <div className='strategy'>
        <h4>How do we make money?</h4>
        <p>
          We make money through <span>affiliate fees</span> when you purchase 
          products through our links, taking a small percentage of the sale. 
          Unlike other sites, which often find out which companies will partner 
          with them and then hawk their products, we determine the right products 
          first and then establish an affiliate link to a retailer who sells them.
        </p>
        <p>
         If the vendor does not have an affiliate program, then we will not recommend 
         a sub-par choice for you - we will recommend nothing. <span>We believe</span> that these 
         affiliate fees will come to replace dollars spent by companies on ineffective marketing.
        </p>
      </div>
    </div>
  )
}

export default MakeMoney
