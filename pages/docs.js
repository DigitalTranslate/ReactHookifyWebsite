import Layout from '../components/Layout';
import About from '../components/Documentation/About.js';
import Installation from '../components/Documentation/Installation.js';
import Translations from '../components/Documentation/Translations.js';

export default function Docs() {
  return (
    <Layout>
      <div>
        <h1>Documentation</h1>
      </div>
      <About />
      <Installation />
      <Translations />
    </Layout>
  );
}
