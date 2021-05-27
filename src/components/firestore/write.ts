import firebase from 'firebase/app'
import 'firebase/firestore'
import type { VFC } from "react";

const WriteToCloudFirestore = () => {
    try {
        firebase
            .firestore()
            .collection('user')
            .add({
                name: 'Duc Dinh',
                age: 20,
                profession: ['frontend', 'backend']
            })
            .then(
                (data) => {
                    // console.log(data);
                    console.log("Sent");
                }
            )
            
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

export default WriteToCloudFirestore