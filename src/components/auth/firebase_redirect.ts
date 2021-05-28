import initFirebase from '../firebase/initFirebase'
import { useEffect, useState } from 'react'
import firebase from 'firebase'
import firebaseApp from 'firebase/app'
import 'firebase/firestore'
import Router from 'next/router'
import { setUserCookie, getUserFromCookie } from './userCookies'

initFirebase();

const googleRedirect = async () => {
    var provider = await new firebase.auth.GoogleAuthProvider();
    await firebase.auth()
        .signInWithPopup(provider)
        .then(async (result) => {
            // The signed-in user info.
            var user = await result.user;

            if (user) {
                // await console.log(getUserFromCookie());
                var db = await firebase.firestore();
                await db
                    .collection("user").where("uid", "==", `${user.uid}`)
                    .get()
                    .then(async (querySnapshot) => {
                        await querySnapshot.forEach(async (doc) => {    
                            await setUserCookie(doc.data());
                        });
                        if (querySnapshot.docs.length > 0) {
                            await Router.push('/');
                            await window.location.reload();
                        } else {
                            Router.push('/info-complete')
                        }
                    })
                    .catch((error) => {
                        console.log("Error getting documents: ", error);
                    });

                // await Router.push('/')
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

export default googleRedirect;
