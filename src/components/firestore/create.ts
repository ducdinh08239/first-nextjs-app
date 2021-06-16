import firebase from 'firebase/app'
import 'firebase/firestore'
import type { VFC } from "react";
import initFirebase from '../firebase/initFirebase'
import Router from 'next/router'
import { setUserCookie } from '../auth/userCookies'
const WriteToCloudFirestore = async (userData) => {
    let userInfo = {
        uid: userData.uid,
        short_name: userData.short_name,
        full_name: userData.full_name,
        profession: userData.profession,
        email: userData.email,
        address: userData.address,
        avatar_url: userData.avatar_url
    }
    try {
        const newUser = await firebase
            .firestore()
            .collection('users')
            .add(userInfo)
        return {
            ...userInfo,
            docId: newUser.id
        }
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

export default WriteToCloudFirestore