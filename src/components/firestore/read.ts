import firebase from 'firebase/app'
import 'firebase/firestore'

const ReadFromCloudFirestore = () => {
    try {
        firebase
            .firestore()
            .collection('user')
            .doc('FpGBvaZ8Ot8wysnNMmkt')
            .onSnapshot((doc) => {
                console.log(doc.data());
            })
    } catch (error) {
        console.log(error);

    }

}

export default ReadFromCloudFirestore