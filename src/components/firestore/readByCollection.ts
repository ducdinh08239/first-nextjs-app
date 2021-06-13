import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'


const ReadByCollection = async (collection_name) => {
    var db = firebase.firestore();
    const querySnapshot = await db.collection(`${collection_name}`).get();
    return querySnapshot;
}

export default ReadByCollection
