import React from "react";
import './BlueStripe.scss';
import { userNameAtom } from "./atoms";
import { useRecoilState, useRecoilValue } from "recoil";

export const BlueStripe = () => {
    // access the userName from the Recoil dimension
    const userName = useRecoilValue(userNameAtom);

    return (
        <div className="BlueStripe">
            Username: {userName}
        </div>
    );
}
