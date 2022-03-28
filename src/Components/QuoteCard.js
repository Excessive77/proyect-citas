import React from 'react'

export const QuoteCard = ({quote, author, handlerClick}) => {
  return (
    <div className='Card'>
        <h2>{quote}</h2>
        <cite>{author}</cite>
        <br/>
        <button onClick={handlerClick}>New quote</button>
        <a class="twitter-share-button"
        href="https://twitter.com/intent/tweet" data-size='large' target='_blank'>Tweet</a>
    </div>
  )
}

export default QuoteCard
