import React,{Component} from 'react'
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component{
  state={
    persons:[
      {id:"1",name: "Edvin", age:"23"},
      {id:"2",name: "Almina", age:"24"},
      {id:"3",name: "Hadir",age:"25"},
      {id:"4",name: "Malik",age:"26"},
      {id:"5",name: "Dzenana",age:"25"}

    ],
    visibility: false
  };

togglePersonsHandler=()=>{
  const doesShowPersons=this.state.visibility;
  this.setState({visibility: !doesShowPersons});
}

deletePerson=(personIndex)=>{
  const persons=[...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons: persons});
}

  changePersonName=(event,id)=>{
    const personIndex=this.state.persons.findIndex(pers=>{
      return pers.id===id
    }); //Pronalazak indeksa osobe na osnovu njenog id-a
    const pe={...this.state.persons[personIndex]}; //Duboka kopija osobe sa tim ondeksom
    pe.name=event.target.value; //Izmjena vrijednosti duboke kopije
    const persones=[...this.state.persons];
    persones[personIndex].name=pe.name;
    this.setState({persons: persones})
  }




  render(){
 
    let showPersons=null;
    if(this.state.visibility){
      showPersons=<Persons 
            persons={this.state.persons} 
            clicked={this.deletePerson} 
            changed={this.changePersonName}/>
    }
    return(
  
      <div className="App">
         <Cockpit togglePersons={this.togglePersonsHandler}/>
         {showPersons} 


      </div>
    );
  }
}

export default App;
