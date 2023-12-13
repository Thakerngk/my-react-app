import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
//import Greeting from './Greeting';
import { Greeting } from './Greeting';
import { PeopleList} from './PeopleList';
import { CounterButton } from './CounterButton';
import { CongratulationsMessage } from './CongratulationsMessage';
const people = [{
  name: 'John',
  age: 21,
  hairColor:'black',
},{
  name: 'Elga',
  age: 25,
  hairColor:'red',
},{
  name: 'Dwayne',
  age: 55,
  hairColor:'blonde',
}]

const displayAlert = () => {alert("Pascal Hello!");}

function App() {
  let adjective = 'cool';
  let url = "https://reactjs.org";

  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <header className="App-header">
        {hideMessage 
          ? null 
          : <CongratulationsMessage numberOfClicks={numberOfClicks} threshold={10} onHide={() => setHideMessage(true)}/>}
        {/* <CongratulationsMessage numberOfClicks={numberOfClicks} threshold={10}/> */}
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/>
{/*         <Greeting name="Thakerng" numberOfMessages={0}/>
        <PeopleList people={people}/>
        <p>
          This is so {adjective}.
        </p>
        <button onClick={() => alert("Hello")}>Hello</button>
        <button onClick={displayAlert}>Alert me!</button>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
