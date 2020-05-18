import Layout from '../components/Layout';
import About from '../components/Documentation/About.js';
import Installation from '../components/Documentation/Installation.js';
import Translations from '../components/Documentation/Translations.js';
import Head from 'next/head';
import Container from '@material-ui/core/Container';

export default function Docs() {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          href="https://highlightjs.org/static/demo/styles/railscasts.css"
        />
      </Head>
      <Container>
        <div id="doc_title">
          <h1>Documentation</h1>
        </div>
        <About />
        <Installation />
        <Translations />
      </Container>
    </Layout>
  );
}
