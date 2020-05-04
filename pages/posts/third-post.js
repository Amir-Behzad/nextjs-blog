import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function ThirdPost() {
  return (
    <Layout>
      <Head>
        <title>Third Post</title>
      </Head>
      <h2>This is the third post.</h2>
      <h3><Link href="/"><a>Go back home.</a></Link></h3>
    </Layout>
  )
  
}