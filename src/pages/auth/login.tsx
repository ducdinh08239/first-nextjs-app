import type { VFC } from "react";
import Image from 'next/image'
import firebase from 'firebase'
import initFirebase from '../../components/firebase/initFirebase';
import  Router  from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'


initFirebase()

const googleRedirect = async() => {
    var provider = await new firebase.auth.GoogleAuthProvider();
    await firebase.auth()
        .signInWithPopup(provider)
        .then(async(result) => {
            // The signed-in user info.
            var user = await result.user;
            if(user){
                console.log(user);
                Router.push('/')
            }

            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

}

const Login: VFC = () => {
    return (
        <div className="text-5xl font-bold text-center container mx-auto z-50">
            Log In With
            <br />
            <br />
            <Image className="z-0 cursor-pointer" id="google-login" onClick={googleRedirect}
                src="/images/gg_log_in.png"
                width={290}
                height={80}
            />
        </div>
    )
}

export default Login