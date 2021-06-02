import React from 'react';
import './Persons.css'

const Persons = (props) => {
    return (
        <div className="Person">
            <h2>Ime: {props.name}, Godine: {props.age}</h2>
            <button onClick={props.click}>Delete me!</button>
        </div>
    );
}

export default Persons;

