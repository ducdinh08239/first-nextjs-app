import cookies from 'js-cookie'
import Router from 'next/router'
import firebase from "firebase/app";
import "firebase/auth";

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
        expires: 1 / 24,
    })
}

export const removeUserCookie = async() => {
    await firebase.auth().signOut().then(() => {
        // window.location.reload();
        console.log('sign out ok');
        
    }).catch((error) => {
        // Handle Errors here.
        console.log(error, 'userCookies ==>');
        
        var errorCode = error.code;
        // ...
    });
    await cookies.remove('my_auth')
    await window.location.reload()
}