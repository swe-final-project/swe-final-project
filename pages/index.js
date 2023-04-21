import React from "react";
import {useSession, signIn, signOut} from 'next-auth/react'


export default function login(){
    async function handleGoogleSignIn()
    {
        signIn('google',{callbackUrl : "http://localhost:3000/home"})
    }
    const {data: session} = useSession()
     return(
        <div>
            <p>You are not signed in</p>
            <button type='button' onClick={() => handleGoogleSignIn()}>Sign In With Google</button>
        </div>
        );
    
};
