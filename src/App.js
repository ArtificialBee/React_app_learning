import React,{useState} from 'react'
import './App.css';
import Persons from './Persons';


const App = () => {
  const [persons,personsHandler]=useState({
    osobe: [
      {ime: "Edvin", godine:"24"},
      {ime: "Almina", godine: "23"},
      {ime: "Hadir", godine:"24"}
    ],
    vidljivost: false
  });
  
const pokaziOsobe=()=>{
  const v=persons.vidljivost;
  personsHandler({
    osobe: [
      {ime: "Edvin", godine:"24"},
      {ime: "Almina", godine: "23"},
      {ime: "Hadir", godine:"24"}
    ],
    vidljivost: !v
  });
}


  return (
    <div>
      <button onClick={pokaziOsobe}>Pokazi osobe</button>
      {persons.vidljivost?
      <div>
        <Persons ime={persons.osobe[0].ime} godine={persons.osobe[0].godine}/>
        <Persons ime={persons.osobe[1].ime} godine={persons.osobe[1].godine}/>
        <Persons ime={persons.osobe[2].ime} godine={persons.osobe[2].godine}/>
      </div>:null
      }
    </div>
  );
}

export default App;
