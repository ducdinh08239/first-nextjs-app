import firebase from 'firebase/app'
import 'firebase/firestore'

const ReadFromCloudFirestore = async (uid) => {
    if (uid != "") {
        var db = firebase.firestore();
        const querySnapshot = await db
            .collection("user").where("uid", "==", uid)
            .get()
            querySnapshot.forEach((doc) => {
            try {
                firebase
                    .firestore()
                    .collection('user')
                    .doc(doc.id)
                    .onSnapshot((doc) => {
                        doc.data();
                    })
            } catch (error) {
                console.log(error);

            }
        });

    } else {
        console.log("Nothing");
    }

}

export default ReadFromCloudFirestore