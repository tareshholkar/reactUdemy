import React from 'react';
import './Person.css';
const person = (props) =>{
    return(
        <div className="Person">
            <h1 onClick={props.click}>Person Name - {props.name}, {props.age}</h1>        
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )    
};
export default person;
