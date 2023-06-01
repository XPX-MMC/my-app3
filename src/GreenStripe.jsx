import React from "react";
import './'

const PERSON_KEY = 'PersonKey'

export const GreenStripe = () => {

    const onHandleWrite = () => {
        // create a person object
        const person = {
            firstName: "Alice", 
            age: 11
        }

        // set this person object in local storage
        sessionStorage.setItem(PERSON_KEY, JSON.stringify(person))
    }

    const onHandleReid = () => {
        const p = JSON.parse(sessionStorage.getItem(PERSON_KEY));
        console.log(p);
        //console.log(typeof(p));
    }

    return (
        <div className="GreenStripe">
            <button onClick={() => onHandleWrite()}>Write</button>
            <button onClick={() => onHandleReid()}>Read</button>
        </div>
    )
}

//Know these methods:

//  localStorage.setItem()
//  localStorage.getItem()
//  localStorage.removeItem()

// JSON.stringify()
// JSON.parse()
// .json() -- will not be tested
