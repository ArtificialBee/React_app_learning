import React from 'react';
import './Persons.css'

const Persons = (props) => {
    return (
        <div className="Person">
            <h2>Ime: {props.name}, Godine: {props.age}</h2>
            <button className="dlt-btn" onClick={props.click}>X</button>
        </div>
    );
}

export default Persons;

