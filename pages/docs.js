/* eslint-disable react/react-in-jsx-scope */
import About from '../components/Documentation/About.js'
import Installation from '../components/Documentation/Installation.js'
import Usage from '../components/Documentation/Usage.js'
import Translations from '../components/Documentation/Translations.js'
import Limitations from '../components/Documentation/Limitations.js'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import TableOfContents from '../components/Documentation/TableOfContents'

export default function Docs() {
  return (
    <>
      <Head>
        <title>Documentation | React Hookify</title>
        <meta name="og:title" content="Documentation | React Hookify" />
        <meta
          name="description"
          content="Docs for React Hookify: About | How to Use | Installation | Limitations"
        />
        <meta
          property="og:description"
          content="Docs for React Hookify: About | How to Use | Installation | Limitations"
        />
        <link
          rel="stylesheet"
          href="https://highlightjs.org/static/demo/styles/atom-one-dark.css"
        />
      </Head>
      <TableOfContents />
      <Container id="documentation-container">
        <div id="doc_title">
          <h1>Documentation</h1>
        </div>
        <About />
        <Installation />
        <Usage />
        <Translations />
        <Limitations />
      </Container>
    </>
  )
}
