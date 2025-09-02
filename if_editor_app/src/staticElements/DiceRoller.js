import { useState } from "react";

function DiceRoller(props) {

    const [diceResults, setDice] = useState([]);

    const roll = (max) => {
      let result = Math.floor(Math.random() * max) +1;
      let diceString = diceResults.slice();
      diceString.push(result)
      setDice(diceString);
    };

    return (
      <div className="DiceRoller" >
          <h2 className='whiteTitle centerText'>DADI</h2>
          
          <div className="resultWindow row center">
            <h3>{diceResults.toString()}</h3>
          </div>

          <div className='row marg-bot center'>
            <img className='diceLogo' src={require('../Imgs/d4.png')} alt="d4"/>
            <button className='customButton diceButton' onClick={() => roll(4)}>&#160;d4&#160;</button>
            <img className='diceLogo' src={require('../Imgs/d4.png')} alt="d4"/>
          </div>

          <div className='row marg-bot center'>
            <img className='diceLogo' src={require('../Imgs/d6.png')} alt="d6"/>
            <button className='customButton diceButton' onClick={() => roll(6)}>&#160;d6&#160;</button>
            <img className='diceLogo' src={require('../Imgs/d6.png')} alt="d6"/>
          </div>

          <div className='row marg-bot center'>
            <img className='diceLogo' src={require('../Imgs/d8.png')} alt="d8"/>
            <button className='customButton diceButton' onClick={() => roll(8)}>&#160;d8&#160;</button>
            <img className='diceLogo' src={require('../Imgs/d8.png')} alt="d8"/>
          </div>

          <button className='customButton diceButton' onClick={() => setDice([])}>Cancella</button>
      </div>
    );
}

export default DiceRoller;