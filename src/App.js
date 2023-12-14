import React, { useState } from 'react';
import { BrowserRouter as Router,Route, Routes, Link } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage} from './pages';
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
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className='App'>
      <Router>
      <Link to='/counter'>Go to Counter Page</Link>
      <Link to='/people-list'>Go to People List Page</Link>

      <Routes>
          <Route path="/" element={<HomePage/>} exact>
            {/* <HomePage /> */}
          </Route>
          <Route path="/counter" element={<CounterButtonPage/>}>
            {/* <CounterButtonPage /> */}
          </Route>   
          <Route path="/people-list" element={<PeopleListPage/>}>
            {/* <PeopleListPage /> */}
          </Route> 
          <Route path="/protected" element={<ProtectedPage/>}>
            </Route>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </div>  
  );
}

export default App;
