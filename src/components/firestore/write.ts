import firebase from 'firebase/app'
import 'firebase/firestore'
import type { VFC } from "react";
import initFirebase from '../firebase/initFirebase'
import Router from 'next/router'
import { setUserCookie, removeUserCookie } from '../auth/userCookies'

initFirebase()

const WriteToCloudFirestore = async (userData) => {
    let userInfo = {
        uid: userData.uid,
        short_name: userData.short_name,
        full_name: userData.full_name,
        profession: userData.profession,
        email: userData.email,
        address: userData.address
    }
    try {
        await firebase
            .firestore()
            .collection('user')
            .add(userInfo)
            .then(
                async () => {
                    // console.log(data);
                    console.log('sent OK');
                    await setUserCookie(userInfo)
                    await Router.push('/')
                    await window.location.reload()
                }
            )

    } catch (error) {
        console.log(error);
        alert(error)
    }
}

export default WriteToCloudFirestore