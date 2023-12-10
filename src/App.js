import logo from './logo.svg';
import './App.css';
//import Greeting from './Greeting';
import { Greeting } from './Greeting';
import { PeopleList} from './PeopleList';

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
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Thakerng" numberOfMessages={0}/>
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
        </a>
      </header>
    </div>
  );
}

export default App;
