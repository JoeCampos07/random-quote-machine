import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteGen from './components/QuoteGen'
import { CSSTransition, SwitchTransition } from 'react-transition-group';




function App() {

  const randomColor = () => {
    const r = (Math.random()*256);
    const g = (Math.random()*256);
    const b = (Math.random()*256);
    return(
      "rgb("+r+","+g+","+b+")"
    )
  }

  const [quoteColor, setQuoteColor] = useState(randomColor())

  const updateColor = () => {
    const newColor = randomColor();
    setQuoteColor(newColor);
  }
  

  return (
    <div className='App' style={{backgroundColor: quoteColor}}>
        <div className='main-content' id='quote-box'>
          <QuoteGen 
            color={quoteColor} 
            updateColor={updateColor}/>        
        </div>
        <div className='signature-container'>
          <div>
          by JoeMint
          </div>
        </div>
    </div>
  );
}

export default App;
