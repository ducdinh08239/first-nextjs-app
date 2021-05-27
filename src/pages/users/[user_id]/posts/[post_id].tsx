import Head from 'next/head'
import { useRouter } from 'next/router'

const User = () => {
    const router = useRouter()
    const param = router.query
    
    return (
        <>
        <Head>
            <title>User Detail:  {param.user_id}</title>
        </Head>
            <h1>post number: {param.post_id}</h1>
        </>
    )
}
export default User