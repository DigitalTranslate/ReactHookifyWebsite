import React, { useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import prettier from 'prettier-standalone'
import Button from '@material-ui/core/Button'
import Layout from '../components/Layout'
// import { testClass, hookifyApp } from './utils'

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
    setOutputCode(prettierTest(inputCode))
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
          </div>
          <div className="container-1b">
            <p className="playground-header">Hookfied Functional Component</p>
            <CodeMirror value={outputCode} options={options2} />
          </div>
        </div>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </Layout>
  )
}

export const testClass = `import React, { Component } from 'react'
export default class TestFile1 extends Component {
  constructor() {
    super()
    this.state = {
      firstName: 'Bob',
      lastName: 'Smith',
    }
  }
  render() {
    return (
      <div>
        <div>
          Hello {this.state.firstName} {this.state.lastName}!
        </div>
        <button
          type="button"
          onClick={() => {
            this.setState({
              firstName: 'Tom',
              lastName: 'Hanks',
            })
          }}
        >
          Change State!
        </button>
      </div>
    )
  }
}`

function prettierTest(string) {
  let formattedTest = prettier.format(string, {
    semi: false,
    parser: 'babel',
  })
  return formattedTest
}

// export function hookifyApp(testStr) {
//   let formattedTest = prettier.format(testStr, {
//     semi: false,
//     parser: 'babel',
//   })
//   // remove all comments
//   formattedTest = formattedTest
//     .replace(/(\/\/)(.*?)(\n)/g, '')
//     .replace(/(\/\*)(.|\n)*?(\*\/)/g, '')
//   const lifecycleCheck = /(componentDidMount\()|(componentDidUpdate\()|(componentWillUnmount\()/.test(
//     formattedTest
//   )
//   const translatedFile = translateToFunctionComp(formattedTest)
//   const formattedFinal = prettier.format(translatedFile, {
//     semi: false,
//     parser: 'babel',
//   })
//   return formattedFinal
// }
