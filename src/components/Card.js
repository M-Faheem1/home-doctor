import React from 'react'

function Card({
  heading,
  content,
  svg
}) {
  return (
    <div className='card'>
      <div className='svgWrapper'>
        {svg}
      </div>
      <span> {heading} </span>
      <p> {content} </p>
    </div>
  )
}

export default Card
