import { useEffect, VFC } from "react";
import Image from 'next/image'
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore'
import googleRedirect from '../../components/auth/firebase_redirect'
import Router from 'next/router'
import { setUserCookie, getUserFromCookie } from '../../components/auth/userCookies'
import { useUserContext } from '../../context/userContext'

const Login: VFC = () => {
    const window = {
        recaptchaVerifier: undefined,
        confirmationResult: undefined
    };
    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        });
    }, [])
    var phoneNumber;
    const getCode = async () => {
        //@ts-ignore
        phoneNumber = document.getElementById("phone_number").value
        console.log('sendding');
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                // ...
            }).catch((error) => {
                console.log(error);
            });

    }

    const verifyWithOtp = async () => {
        //@ts-ignore
        const code = document.getElementById("otp").value
        const result = await window.confirmationResult.confirm(code)
        const user = result.user;
        if (user) {
            setUserCookie(user.uid);
            // await console.log(getUserFromCookie());
            var db = firebase.firestore();
            const querySnapshot = await db
                .collection("users").where("uid", "==", `${user.uid}`)
                .get()
            var docId;
            querySnapshot.forEach(async (doc) => {
                docId = doc.id
                setUserCookie({
                    ...doc.data(),
                    docId: doc.id
                });
            });

            if (querySnapshot.docs.length > 0) {
                await Router.push('/');
                //@ts-ignore
                window.location.reload();
            } else {
                Router.push('/info-complete')
            }
        }
    
}

return (
    <div className="text-5xl font-bold text-center container mx-auto z-50">
        Log In With
        <br />
        <br />
        <Image className="z-0 cursor-pointer" id="google-login" onClick={googleRedirect}
            src="/images/gg_log_in.png"
            width={290}
            height={80}
        />
        <br />
            Or
        <br />
        <br />
        <div className="text-base">
            <div id="recaptcha-container" />
            <input type="text" name="phone_number" id="phone_number" placeholder="Enter your phone number" className="bg-gray-100 rounded" />
            <button>
                <a href="#" id="getcode" onClick={getCode} className="bg-gray-600 text-white">Get OTP</a>
            </button>
            <br />
            <br />
            <input type="text" name="opt" id="otp" placeholder="Enter your OTP" className="bg-gray-100 rounded" />
            <button>
                <a href="#" id="verifyWithOtp" onClick={verifyWithOtp} className="bg-gray-600 text-white">Verify</a>
            </button>
        </div>
    </div>
)
}

export default Login