import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FourthPost() {
  return (
    <Layout>
      <Head>
        <title>
          Fourth Post
        </title>
      </Head>
      <h2>This is the fourth page.</h2>
      <h3><Link href="/"><a >Go back to home.</a></Link></h3>
    </Layout>
  )
}