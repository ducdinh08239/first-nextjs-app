import firebase from 'firebase/app'
import 'firebase/firestore'

const Update = async (docId, userData) => {

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
        await firebase
            .firestore()
            .collection('users')
            .doc(docId).set(userData)
        console.log('sent OK');
        return {
            ...userInfo,
            docId: docId
        }
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

export default Update