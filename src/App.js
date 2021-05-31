import React,{useState} from 'react'
import './App.css';
import Persons from './Persons';


const App = () => {
  const [persons,personsHandler]=useState({
    osobe: [
      {ime: "Edvin", godine:"24"},
      {ime: "Almina", godine: "23"},
      {ime: "Hadir", godine:"24"}
    ]
  });
  
  const [showPersons,showPersonsHandler]=useState({
    visibility: "hidden"
  });

  const pokaziOsobe=()=>{
    showPersonsHandler({visibility: "visible"});
  }


  return (
    <div>
      <button Toggle={pokaziOsobe}>Pokazi osobe!</button>
      <div style={showPersons}>
        <Persons ime={persons.osobe[0].ime} godine={persons.osobe[0].godine}/>
        <Persons ime={persons.osobe[1].ime} godine={persons.osobe[1].godine}/>
        <Persons ime={persons.osobe[2].ime} godine={persons.osobe[2].godine}/>
      </div>

    </div>
  );
}

export default App;
