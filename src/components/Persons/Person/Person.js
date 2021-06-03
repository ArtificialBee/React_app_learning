import React from 'react';
import './Person.css'

const Persons = (props) => {
    return (
        <div className="Person">
            <h2>Ime: {props.name}, Godine: {props.age}</h2>
            <input onChange={props.change} type="text" value={props.value}/>
            <button className="dlt-btn" onClick={props.click}>X</button>

        </div>
    );
}

export default Persons;

