/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div id="page-container">
      <Head>
        <title>React Hookify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="content-wrap">
        <Navbar />
        <main>{children}</main>
      </div>

      <Footer />
      <style jsx>
        {`
          #page-container {
            position: relative;
            min-height: 100vh;
            padding-bottom: 12rem;
          }
          #content-wrap {
            margin-top: 50px;
          }
        `}
      </style>
    </div>
  )
}
