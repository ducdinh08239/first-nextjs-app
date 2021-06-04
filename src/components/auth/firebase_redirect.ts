import initFirebase from '../firebase/initFirebase'
import { useEffect, useState } from 'react'
import firebase from 'firebase'
import firebaseApp from 'firebase/app'
import 'firebase/firestore'
import Router from 'next/router'
import { setUserCookie, getUserFromCookie } from './userCookies'

const googleRedirect = async () => {
    // initFirebase();
    var provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider)
    const user = result.user
    // console.log(firebase.auth());
    if (user) {
        setUserCookie(user.uid);
        // await console.log(getUserFromCookie());
        var db = firebase.firestore();
        const querySnapshot = await db
            .collection("users").where("uid", "==", `${user.uid}`)
            .get()
        var docId;
        querySnapshot.forEach(async (doc) => {
            docId = doc.id
            setUserCookie({
                ...doc.data(),
                docId: doc.id
            });
        });

        if (querySnapshot.docs.length > 0) {
            await Router.push('/');
            window.location.reload();
        } else {
            Router.push('/info-complete')
        }
    }
    // console.log('a');

}

export default googleRedirect;
