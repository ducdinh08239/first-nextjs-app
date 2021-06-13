import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import TryPage from '../../trypage'
const testRouter = (param) => <TryPage/>

export default testRouter

export const getServerSideProps = async ({ params }: any) => {
    return { props: { title: params.test_v2, content: '...' } };
  };
