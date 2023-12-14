import React from "react";
import { PeopleList } from "../PeopleList";

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
  }];

  export const PeopleListPage = () => (
    <>
        <h1>The People List Page</h1>
        <PeopleList people={people}/>
    </>
  )