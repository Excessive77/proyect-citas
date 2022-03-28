import { useState } from 'react';
import React from 'react'
import QuoteCard from '../Components/QuoteCard'
import datBase from '../quotes.json'
import '../Components/Styles/StylesQuoteBox.css'

const quotes = datBase.quotes;
const quotesMax = datBase.quotes.length;

// Función generadora del indice aleatorio de las quotes del JSON
const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max)
}

// Función generadora de un color en codigo hexadecimal sin la f para no tener color blanco
const getRandomColor = ()=> {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd']

    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomIndex(hex.length)];
    }
    return hexColor
}

export const QuoteBox = () => {

    // Establecer los useState de las quotes y del color
    const [quote, setQuote] = useState(quotes[getRandomIndex(quotesMax)])
    const [color, setColor] = useState(getRandomColor())

    // Creacción del handler para generar el color hexadecimal aleatorio para el body y también generar la quote aleatoria
    const hanlderClick = () => {
        const newQuoteIndex = getRandomIndex(quotesMax)
        setQuote(quotes[newQuoteIndex])
        setColor(getRandomColor())
      }
      document.body.style = `background: ${color}`
    //   document.button.style = `background: ${color}`
  return (
    <div className='Quote-box' style={{color: color}}>
        <QuoteCard
        quote={quote.quote}
        author={quote.author}
        handlerClick={hanlderClick}
        />
    </div>
  )
}

export default QuoteBox