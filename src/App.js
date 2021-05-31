import { render } from '@testing-library/react';
import React,{Components} from 'react'
import './App.css';

// function App() {
//   return (<div>

//   </div>);
// }

class App extends Components{
  state=[
    {
      ime: "Edvin", godine: 23,
      ime: "Almina", godine: 24,
      ime: "Malik", godine:56
    }
  ];
}

render(

  <div>
    
  </div>
);

export default App;
