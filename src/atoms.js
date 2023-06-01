import { atom } from "recoil";

// An atom that represents the state variable "userName"
export const userNameAtom = atom({
    key: "atomUserName", 
    default: ""
});
