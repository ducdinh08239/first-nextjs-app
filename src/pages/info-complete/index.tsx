import type { VFC } from "react";
import Image from 'next/image'
import writeData from '../../components/firestore/write'
import { getUserFromCookie } from '../../components/auth/userCookies'

const InfoComplete: VFC = () => {
    const infoComplete = async (e) => {
        await e.preventDefault()
        var entireForm = await e.target;
        var userData = await {
            uid: getUserFromCookie(),
            short_name: entireForm.short_name.value,
            full_name: entireForm.full_name.value,
            profession: entireForm.profession.value,
            email: entireForm.email.value,
            address: entireForm.address.value
        }
        await writeData(userData);
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