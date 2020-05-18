/* eslint-disable react/react-in-jsx-scope */
import '../styles/global.css';

//THIS IS TOP LEVEL COMPONENT THAT'S ONLY HERE TO IMPORT GLOBAL CSS
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
