import React from 'react'
import firebase from 'firebase/app'
import 'firebase/storage'

const UploadImage = () => {
    const handleButton = (e) => {
        e.preventDefault();
        //@ts-ignore
        let imageValue = document.getElementById('uploadFile').files[0]
        const storage = firebase.storage().ref('images/' + imageValue.name);
        const task = storage.put(imageValue);

        task.on('state_changed',
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                console.log(error);

            },
            () => {
                task.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    //@ts-ignore
                    document.getElementById('image_just_loaded').innerHTML = `<img src='${downloadURL}' alt="" />`
                });
            }
        )
    }

    return (
        <div>
            <form action="">
                <input type="file" name="uploadFile" id="uploadFile" />
                <br />
                <br />
                <button id="uploadBtn" onClick={handleButton}>Submit</button>
                <br />
                <br />
            </form>
            Image just loaded:
            <div className="" id="image_just_loaded"></div>
        </div>
    )
}

export default UploadImage
