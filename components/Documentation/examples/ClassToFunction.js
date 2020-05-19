import Highlight from 'react-highlight.js'
import Container from '@material-ui/core/Container'
import React from 'react'
import prettier from 'prettier-standalone'

const input = prettier.format(
  `import React, { Component } from 'react';
  class App extends Component {
    render() {
      return <div>Hello</div>;
    }
}`,
  {
    semi: false,
    parser: 'babel',
  }
)

const results = prettier.format(
  `import React from "react"
    function App() {
  return <div>Hello</div>
}`,
  {
    semi: false,
    parser: 'babel',
  }
)

export default function ClassToFunction() {
  return (
    <div>
      <h4>Class Component to Functional Component</h4>
      <p>
        React Hookify is able to take a class component, and construct it in the
        form of a functional component. In this simple example, note the changes
        to the import statement, class declaration, and render method.
      </p>
      <div id="translation_code_examples">
        <Container maxWidth="md">
          <h5>Input:</h5>
          <Highlight language={'javascript'}>{input}</Highlight>
          <h5>Output:</h5>
          <Highlight language={'javascript'}>{results}</Highlight>
        </Container>
      </div>
      <div id="documentation_links">
        <h5 id="read-more">Read More:</h5>
        <ul id="bullets">
          <li>
            <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">
              React Documentation On Hooks
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
