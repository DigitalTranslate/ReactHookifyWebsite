import React, { useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
// import prettier from 'prettier-standalone'
import Button from '@material-ui/core/Button'
import Layout from '../components/Layout'
import { testClass, hookifyApp } from '../componentUtils'

let modeLoaded = false
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  require('codemirror/mode/jsx/jsx')
  modeLoaded = true
}

export default function Playground() {
  const [inputCode, setInputCode] = useState(testClass)
  const [outputCode, setOutputCode] = useState('')

  function handleSubmit() {
    setOutputCode(inputCode)
    // setOutputCode(prettierTest(inputCode))
    setOutputCode(hookifyApp(inputCode))
  }
  let options = {
    lineNumbers: true,
    theme: 'material',
    // mode: 'jsx',
    smartIndent: true,
    readOnly: false,
  }
  let options2 = {
    lineNumbers: true,
    theme: 'material',
    // mode: 'jsx',
    smartIndent: true,
    readOnly: true,
  }
  if (modeLoaded) {
    options.mode = 'jsx'
    options2.mode = 'jsx'
  }
  return (
    <Layout>
      {modeLoaded && (
        <div className="container-0">
          <div className="container-1">
            <div className="container-1a">
              <p className="playground-header">Class Component</p>
              <CodeMirror
                value={inputCode}
                options={options}
                onBeforeChange={(editor, data, value) => {
                  setInputCode(value)
                }}
                onChange={(editor, data, value) => {
                  setInputCode(value)
                }}
              />
              <div className="button-container">
                <Button
                  variant="contained"
                  color="default"
                  className="playground-button"
                >
                  copy
                </Button>
                <Button
                  variant="contained"
                  color="default"
                  className="playground-button"
                >
                  clear
                </Button>
              </div>
            </div>
            <div className="container-1b">
              <p className="playground-header">Hookfied Functional Component</p>
              <CodeMirror value={outputCode} options={options2} />
              <div className="button-container">
                <Button
                  variant="contained"
                  color="default"
                  className="playground-button"
                >
                  copy
                </Button>
              </div>
            </div>
          </div>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      )}
    </Layout>
  )
}
