import React, { useEffect, useMemo, useState } from 'react'
import { useUserContext } from '../../context/userContext'
import { useRouter } from 'next/router'
import firebase from 'firebase/app'
import 'firebase/storage'
import updateData from '../../components/firestore/update'
import { getUserFromCookie } from '../../components/auth/userCookies'
interface userType {
    uid?: string;
    short_name?: string;
    profession?: string;
    full_name?: string;
    email?: string;
    docId?: string;
    avatar_url?: string;
    address?: string;

}

const InfoEdit = () => {
    // const { parseUserData, doc_id } = props
    const storageRef = firebase.storage().ref();
    const { userSession, setUserSession } = useUserContext();
    const [userChange, setUserChange] = useState<userType>({});

    useMemo(() => {
        if (userSession) {
            setUserChange(userSession)
        }
    }, [userSession])

    const router = useRouter()

    const onChangeHandle = (e: any) => {
        setUserChange({
            ...userChange,
            [e.target.id]: e.target.value
        }
        );
    }

    const saveInfo = async (e) => {
        await e.preventDefault()
        //@ts-ignore
        var imageValue = await document.getElementById('uploadFile').files[0];

        if (imageValue == undefined) {
            var entireForm = await e.target;
            var userFormData = await {
                uid: userChange.uid,
                short_name: entireForm.short_name.value,
                full_name: entireForm.full_name.value,
                profession: entireForm.profession.value,
                email: entireForm.email.value,
                address: entireForm.address.value,
                avatar_url: entireForm.existedUploadFile.src
            }
            const returnData = await updateData(userChange.docId, userFormData);
            await setUserSession(returnData);
            await router.push('/')
        } else {
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
                async () => {
                    //@ts-ignore
                    var imageOldValue = await document.getElementById('existedUploadFile').src;
                    if (imageOldValue) {
                        var originalName = (imageOldValue.split('/')[7]).split('?')[0].replace('%2F', '/');
                        var desertRef = storageRef.child(originalName);
                        await desertRef.delete()
                    }

                    await task.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
                        image_url = await downloadURL;
                        var entireForm = await e.target;
                        var userFormData = {
                            uid: userChange.uid,
                            short_name: entireForm.short_name.value,
                            full_name: entireForm.full_name.value,
                            profession: entireForm.profession.value,
                            email: entireForm.email.value,
                            address: entireForm.address.value,
                            avatar_url: image_url
                        }
                        const returnData = await updateData(userChange.docId, userFormData);
                        await setUserSession(returnData);
                        await router.push('/')
                    });
                }
            )
        }
    }

    return (
        <div>
            <div className="text-center container mx-auto z-50 text-blue-500">
                <div className="text-3xl font-bold mb-10">
                    Edit Your Info
                </div>
                <div className="w-full max-w-xs container mx-auto">
                    <hr className="mb-10" />
                    {userSession ? (
                        <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={saveInfo}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                                    Short Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="short_name" type="text" onChange={onChangeHandle} value={userChange.short_name} />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                                    Full Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="full_name" type="text" onChange={onChangeHandle} value={userChange.full_name} />

                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                                    Avatar
                                    <img src={`${userChange.avatar_url}`} width="518px" height="477px" className="rounded-md" id="existedUploadFile" />
                                </label>
                                <input type='file' id='uploadFile' />

                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                                    Profession
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profession" type="text" onChange={onChangeHandle} value={userChange.profession} />

                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" onChange={onChangeHandle} value={userChange.email} />

                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                                    Address
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" onChange={onChangeHandle} value={userChange.address} />

                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Save
                                </button>
                                <div className="text-base inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer" onClick={() => router.back()}>
                                    Cancel
                                </div>
                            </div>
                        </form>
                    ) : (
                        <div className="">
                            Not Have User Anymore
                        </div>
                    )}
                    <p className="text-center text-gray-500 text-xs">
                        ©2021 Duc Dinh
                    </p>
                </div>
            </div>
        </div>
    )

}

export default InfoEdit

// export const getServerSideProps = async ({ params }: any) => {
//     const { user_id } = params;
//     const userData = await ReadDataFirestore(user_id);
//     const parseUserData = JSON.parse(JSON.stringify(userData))

//     return { props: { parseUserData:parseUserData, doc_id: user_id } }
// }
