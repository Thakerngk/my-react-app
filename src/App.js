import React, { useState } from 'react';
import { BrowserRouter as Router,Route, Routes, Link } from 'react-router-dom';
import {
  HomePage,
  CounterButtonPage,
  PeopleListPage,
  NotFoundPage,
  ProtectedPage,
  ControlledFormPage,
  UncontrolledFormPage,
  UserProfilePage
} from './pages';
import logo from './logo.svg';
import './App.css';
//import Greeting from './Greeting';
/* import { Greeting } from './Greeting';
import { PeopleList} from './PeopleList';
import { CounterButton } from './CounterButton';
import { CongratulationsMessage } from './CongratulationsMessage'; */
import { NavBar } from './NavBar'; 
import { FormsNavBar } from './FormsNavBar';
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
        <NavBar />
          <div className='App-header'>
            <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route path="/counter" element={<CounterButtonPage/>}/>
              <Route path="/people-list" element={<PeopleListPage/>}/>
              <Route path="/protected" element={<ProtectedPage/>}/>   
              <Route path="/user" element={<UserProfilePage/>}/>   
            </Routes>
          </div>
      </Router>
    </div>  
  );
}

export default App;
