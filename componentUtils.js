import prettier from 'prettier-standalone'
import translateToFunctionComp from './lib/mainTranslator'

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

export function hookifyApp(testStr) {
  let formattedTest = prettier.format(testStr, {
    semi: false,
    parser: 'babel',
  })
  // remove all comments
  formattedTest = formattedTest
    .replace(/(\/\/)(.*?)(\n)/g, '')
    .replace(/(\/\*)(.|\n)*?(\*\/)/g, '')
  const lifecycleCheck = /(componentDidMount\()|(componentDidUpdate\()|(componentWillUnmount\()/.test(
    formattedTest
  )
  const translatedFile = translateToFunctionComp(formattedTest)
  const formattedFinal = prettier.format(translatedFile, {
    semi: false,
    parser: 'babel',
  })
  return formattedFinal
}
