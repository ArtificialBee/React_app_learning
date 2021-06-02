import React,{Component} from 'react'
import './App.css';
import Persons from './Persons';


class App extends Component{
  state={
    persons:[
      {name: "Edvin", age:"23"},
      {name: "Almina", age:"24"},
      {name: "Hadir",age:"25"}
    ],
    showPersons: false
  };

  togglePersonsHandler=()=>{
    const doesShowPersons=this.state.showPersons;
    this.setState({
      persons:[
        {name: "Edvin", age:"23"},
        {name: "Almina", age:"24"},
        {name: "Hadir",age:"25"}
      ],
      showPersons: !doesShowPersons     
    });
  }


  render(){
    return(
      <div className="App">
        <button onClick={this.togglePersonsHandler}>KLIKNIII</button>
        {this.state.showPersons?<div>
          <Persons name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Persons name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.nameChangedHandler}/>
          <Persons name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>:null}

      </div>
    );
  }
}

export default App;
