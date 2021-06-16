import firebase from 'firebase'
import firebaseApp from 'firebase/app'
import 'firebase/firestore'
import Router from 'next/router'
import { setUserCookie } from './userCookies'

const googleRedirect = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider)
    const user = result.user

    if (user) {
        var db = firebase.firestore();
        const data = await db
            .collection("users").where("uid", "==", `${user.uid}`)
            .get()
        if(data.docs.length > 0){
            return {...data.docs[0].data(),
                docId: data.docs[0].id}
        } else {
            return user.uid
        }
    }

}

export default googleRedirect;
