import React, { useEffect, useState} from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { userNameAtom } from "./atoms";
import './RedStripe.scss';
import App from "./App";

export const RedStripe = () => {
    // regular state variable
    let [email, setEmail] = useState("");

    // upgraded state variable
    let [userName, setUserName] = useRecoilState(userNameAtom);

    const url = `https://jsonplaceholder.typicode.com/users/1`;

    const usersQuery = useQuery(`users/1`, async () => await axios.get(url), 
        {
            refetchOnWindowFocus: false,
            enabled: false
        }
    );

        //         App
        //         /  \
        // RedStripe BlueStripe

    useEffect(() => {
        if (usersQuery.isFetched && userName === "") {
                setUserName(usersQuery.data.data.name);
                setEmail(usersQuery.data.data.email);
            console.log(usersQuery);
        }

    }, [userName, setEmail, setUserName, usersQuery]
    );

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