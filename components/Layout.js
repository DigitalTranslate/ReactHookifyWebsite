/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>React Hookify</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
