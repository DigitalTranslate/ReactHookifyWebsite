import Highlight from 'react-highlight.js'
import Container from '@material-ui/core/Container'

const input = `import React, { Component } from 'react';
export default class Test extends Component {
  render() {
    return <div>TEST</div>;
  }
}`

const results = `import React from "react"
export default function Test() {
  return <div>TEST</div>
}`

export default function ClassToFunction() {
  return (
    <div>
      <h4>Class to Function</h4>
      <div id="documentation_links">
        <h5>Articles and Documentation</h5>
        <ul>
          <li>
            <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">
              React Documentation On Hooks
            </a>
          </li>
        </ul>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
        tincidunt purus. Curabitur tincidunt enim nec nisi accumsan ullamcorper.
        Maecenas at massa vel sapien feugiat eleifend in non massa.
      </p>
      <div id="translation_code_examples">
        <Container maxWidth="md">
          <h5>Input:</h5>
          <Highlight language={'javascript'}>{input}</Highlight>
          <h5 id="useState-ex-idx">Output:</h5>
          <Highlight language={'javascript'}> {results}</Highlight>
        </Container>
      </div>
    </div>
  )
}
