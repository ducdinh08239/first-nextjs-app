import { useUserContext } from '../../context/userContext'
import firebase from 'firebase/app'
import 'firebase/firestore'

const HandleUserInfo = async (req, res) => {

    var db = firebase.firestore();
    const querySnapshot = await db
        .collection("users").where("uid", "==", req.uid)
        .get()
    querySnapshot.forEach((doc) => {
        try {
            firebase
                .firestore()
                .collection('users')
                .doc(doc.id)
                .onSnapshot((doc) => {
                    console.log(doc.data());
                })
        } catch (error) {
            console.log(error);

        }
    });
}

export default HandleUserInfo