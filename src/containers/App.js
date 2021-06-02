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
  const vis=this.state.visibility;
  this.setState({visibility: !vis})
 }

 deletePersonHandler=(indexPerson)=>{
  const persones=[...this.state.persons];
  persones.splice(indexPerson,1);
  this.setState({persons: persones});

 }



  render(){
    
    let showPersons=null; //Default value of showing persons

    if(this.state.visibility){
      showPersons=(this.state.persons.map((person,index)=>{
        return <Persons name={person.name} age={person.age} click={()=> this.deletePersonHandler(index)} key={person.id}/>
      }));
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
