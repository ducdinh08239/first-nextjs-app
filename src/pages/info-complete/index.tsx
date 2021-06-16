import type { VFC } from "react";
import Image from 'next/image'
import writeData from '../../components/firestore/create'
import { getUserFromCookie } from '../../components/auth/userCookies'
import firebase from 'firebase/app'
import 'firebase/storage'
import * as admin from "firebase-admin";
import router from "next/router";
import { useUserContext } from "../../context/userContext";

const InfoComplete: VFC = () => {
    const { userSession, setUserSession } = useUserContext();

    const infoComplete = async (e) => {
        await e.preventDefault()
        //@ts-ignore
        let imageValue = document.getElementById('uploadFile').files[0];
        const storage = firebase.storage().ref('images/' + imageValue.name);
        const task = storage.put(imageValue);
        var image_url;
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
                task.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
                    image_url = await downloadURL;
                    var entireForm = await e.target;
                    var userData = await {
                        uid: userSession,
                        short_name: entireForm.short_name.value,
                        full_name: entireForm.full_name.value,
                        profession: entireForm.profession.value,
                        email: entireForm.email.value,
                        address: entireForm.address.value,
                        avatar_url: image_url
                    }
                    const returnData = await writeData(userData);
                    if (returnData) {
                        setUserSession(returnData)
                        await router.push('/')
                    }
                });
            }
        )

    }

    return (
        <div className="text-center container mx-auto z-50 text-blue-500">
            <div className="text-3xl font-bold mb-10">
                Complete Your Info
            </div>
            <div className="w-full max-w-xs container mx-auto">

                <hr className="mb-10" />
                <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={infoComplete} >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                            Short Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="short_name" type="text" placeholder="Ex: Duc Dinh" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                            Full Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="full_name" type="text" placeholder="Ex: Dinh Viet Viet Duc" />

                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                            Avatar
                        </label>
                        <input type='file' id='uploadFile' />

                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                            Profession
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profession" type="text" placeholder="Ex: Web Developer & Engineer" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Ex: ducdinh@gmail.com" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                            Address
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Ex: Ha Noi, Xuan Phuong, ..." />

                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Complete
                        </button>
                        <a className="text-base inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Cancel
                        </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    ©2021 Duc Dinh
                </p>
            </div>
        </div>
    )
}

export default InfoComplete