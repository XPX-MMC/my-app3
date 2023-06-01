import React, { useState} from "react";
import axios from "axios";
import { useQuery } from "react-query";
import './RedStripe.scss';
//React Query module
export const RedStripe = () => {
    let [userName, setUserName] = useState('');

    const url = `https://jsonplaceholder.typicode.com/users/1`;

    const usersQuery = useQuery(`users/1`, async () => await axios.get(url), 
        {
            refetchOnWindowFocus: false,
            enabled: false
        }
    );
    

    if (usersQuery.isFetched) {
        if (userName === "") {
            setUserName(usersQuery.data.data.name);
        }
        console.log(usersQuery);
    }


    const onHandlePush = () => {
        usersQuery.refetch();
    }

    return (
        <div className="RedStripe">
            <button onClick={onHandlePush}>Get User</button>
            Username: {userName}
        </div>
    )

}