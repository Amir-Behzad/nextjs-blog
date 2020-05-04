import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Amir. I'm a software developer and Bass player. You can subscribe to my youtube channel <Link href="https://www.youtube.com/channel/UCgh-MnlDxQQLbF9qEE8qUgQ"><a>here.</a></Link></p>
      </section>
    </Layout>
  )
}