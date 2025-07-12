import {auth} from "../firebase/firebase";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";



export const loginRequest=async (email,password)=>{
     return signInWithEmailAndPassword(auth, email, password)
}

export const registerRequest=async (email,password)=>{
     return createUserWithEmailAndPassword(auth, email, password)
}