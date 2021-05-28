import type { VFC } from "react";
import Image from 'next/image'
import googleRedirect from '../../components/auth/firebase_redirect'

const Login: VFC = () => {
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
        </div>
    )
}

export default Login