/* eslint-disable react/react-in-jsx-scope */
import '../styles/global.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/monokai.css'

//THIS IS TOP LEVEL COMPONENT THAT'S ONLY HERE TO IMPORT GLOBAL CSS
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
