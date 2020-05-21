/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div id="page-container">
      <Head>
        <title>React Hookify</title>
        <meta
          name="description"
          content="Translate your class components into functional components to make the most of React Hooks"
        />
        <meta
          property="og:description"
          content="Translate your class components into functional components to make the most of React Hooks"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta
          name="google-site-verification"
          content="llH7nXrjQn4-ZEWZx78PTS5HwhzxI7SMPozQbo2KSZ0"
        />
        <meta property="og:image" content="reacthooks.png" />
        <meta name="twitter:card" content="summary_large_image" />
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
            width: 100%;
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
