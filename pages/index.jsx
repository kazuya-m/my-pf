import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Layout } from '../layouts'
import { Top } from '../components/top'
import { Profile } from '../components/profile'
import { Works } from '../components/works'
import { Contact } from '../components/contact'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>KM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top />
      <Profile />
      <Works />
      <Contact />
    </Layout>
    )
}
