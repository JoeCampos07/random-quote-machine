import React ,{ useState, useEffect }from "react";
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from "react-icons/bs";
import { BiSolidQuoteRight } from 'react-icons/bi';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import '../stylesheets/quotegen.css' 
import { CSSTransition, SwitchTransition } from "react-transition-group";

let dbUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

function QuoteGen( {color, updateColor} ) {
  
  const [quotesData, setQuotesData] = useState(null)
  const [quote, setQuote] = useState({quote: "I've got this!", author:"Joe Mint"})
  const [randomNumber, setRandomNumber] = useState(1)
  

  const fetchQuotes = async (url) => {
      const response = await fetch(url)
      const parsedJSON = await response.json()
      setQuotesData(parsedJSON.quotes)
      
  }

  useEffect(()=> {
    fetchQuotes(dbUrl)
  }, [dbUrl])


  const getRandomQuote = () => {
    const randomIndex = Math.floor(quotesData.length * Math.random());
    setRandomNumber(randomIndex)
    setQuote(quotesData[randomNumber]);
  }
  

  /* This function helps to do both actions at the same time onClick*/ 
  
  const handleButton = () => {
    getRandomQuote();
    updateColor();
  }

  
  return(
    <div className='quotegen-main'>
      <div className='quote-text-div'>
        <span 
          className='quote-text'
          style={{color: color}}
          id='text'>
            <i><BiSolidQuoteLeft style={{color:color}}/></i>
            {quote.quote}
            </span>
      </div>
      <div className='author-text'>
            <span 
              className='author-main'
              style={{color: color}}
              id='author'>{quote.author}</span>
      </div>
      <div className='button-div'>
        <div className="share-button-wrap">
          <a 
            className='twitter-button'
            style={{backgroundColor:color}}
            id='tweet-quote'
            href={`https://www.twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`}
            target='_blank'>
              <BsTwitter/>
          </a>
          <button 
            className='twitter-button'
            style={{backgroundColor:color}}>
            <BsFacebook/>
          </button>
        </div>
        <button 
          className='quote-button'
          style={{backgroundColor:color}}
          onClick={handleButton}
          id='new-quote' 
        >New Quote</button>
      </div>
      
    
    </div>
  )
}

export default QuoteGen;