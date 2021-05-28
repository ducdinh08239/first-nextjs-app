import firebase from 'firebase/app'
import 'firebase/firestore'

const ReadFromCloudFirestore = (uid) => {
    if (uid != "") {
        var db = firebase.firestore();
        db
            .collection("user").where("uid", "==", uid)
            .get()
            .then((querySnapshot) => {
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
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

    } else {
        console.log("Nothing");
    }

}

export default ReadFromCloudFirestore