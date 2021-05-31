import React from 'react';

const Persons = (props) => {
    return (
        <div>
            <h1>Ime: {props.ime}, Godine: {props.godine}</h1>
        </div>
    );
}

export default Persons;
