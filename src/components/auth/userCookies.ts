import cookies from 'js-cookie'
import Router from 'next/router'
import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "../firebase/initFirebase"

export const getUserFromCookie = () => {
    const cookie = cookies.get('my_auth')
    if (!cookie) {
        return
    }
    try {
        return JSON.parse(cookie)
    } catch (err) {
        return JSON.parse(JSON.stringify(cookie))
    }


}

export const setUserCookie = (user) => {
    cookies.set('my_auth', user, {
        expires: 12 / 24,
    })
}
initFirebase();
export const removeUserCookie = async () => {
    firebase.auth().signOut()
    await cookies.remove('my_auth')
    await window.location.reload()
}