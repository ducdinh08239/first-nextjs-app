import initFirebase from '../firebase/initFirebase'
import { useEffect, useState } from 'react'
import firebase from 'firebase'
import firebaseApp from 'firebase/app'
import 'firebase/firestore'
import Router from 'next/router'
import { setUserCookie, getUserFromCookie } from './userCookies'

initFirebase();

const googleRedirect = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider)
    const user = result.user

    if (user) {
        // await console.log(getUserFromCookie());
        var db = firebase.firestore();
        const querySnapshot = await db
            .collection("user").where("uid", "==", `${user.uid}`)
            .get()
        querySnapshot.forEach(async (doc) => {
            setUserCookie(doc.data());
        });
        
        if (querySnapshot.docs.length > 0) {
            await Router.push('/');
            window.location.reload();
        } else {
            Router.push('/info-complete')
        }
    }
}

export default googleRedirect;
