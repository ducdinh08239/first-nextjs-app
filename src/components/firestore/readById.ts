import firebase from 'firebase/app'
import 'firebase/firestore'

const ReadById = async (collection, doc_id) => {
        var db = firebase.firestore();
        const userData = await db.collection(`${collection}`).doc(doc_id).get();
        
        return userData
}

export default ReadById