import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

const User = () => {
    const router = useRouter();
    const param = router.query;
    
    return (
        <>
            <div>
                <h1>Detail {param.user_id} </h1>
            </div>
            <Link href='/'>
                <a>Return to homepage</a>
            </Link>
        </>
    )
}
export default User