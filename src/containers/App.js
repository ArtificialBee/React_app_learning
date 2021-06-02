import React,{Component} from 'react'
import './App.css';
import Persons from './Persons';


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


  render(){
 
    let showPersons=null;

    if(this.state.visibility){
      showPersons=(
        <div>
          {this.state.persons.map((person,index)=>{
            return <Persons name={person.name} age={person.age} key={person.id} click={()=> this.deletePerson(index)}/>
          })}
        </div>
      );
    }

    return(
      <div className="App">
        <button onClick={this.togglePersonsHandler}>KLIKNIII</button>
        {showPersons}
      </div>
    );
  }
}

export default App;
