import React, { useState} from "react";
import './RedStripe.scss';

// Using fetch

export const RedStripe = () => {
    let [userName, setUserName] = useState('');

    const url = `https://jsonplaceholder.typicode.com/users/1`;

   const onHandlePush = async () => {
    try{

        const response = await fetch(url);
        const data = await response.json();
        setUserName(data.name);
        console.log(`data from API: ${JSON.stringify(data)}`);
        
    } catch (error) {
        console.log(`Error fetching user data: ${error}`)
    }
   }

    return (
        <div className="RedStripe">
            <button onClick={onHandlePush}>Get User</button>
            Username: {userName}
        </div>
    )

}