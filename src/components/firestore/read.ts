import firebase from 'firebase/app'
import 'firebase/firestore'

const ReadFromCloudFirestore = async (doc_id) => {
        var db = firebase.firestore();
        const userData = await db.collection("users").doc(doc_id).get();
        
        return userData.data()
}

export default ReadFromCloudFirestore