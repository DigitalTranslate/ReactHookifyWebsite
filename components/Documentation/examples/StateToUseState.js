import Highlight from 'react-highlight.js'
import Container from '@material-ui/core/Container'
import prettier from 'prettier-standalone'

const input = prettier.format(
  `
  import React, { Component } from 'react'

  class App extends Component {
    constructor() {
      this.state = {
        firstName: "Bob",
        lastName: "Smith"
      }
    }
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
  `
  import React from "react"

    function App() {
      const [firstName, setFirstName] = useState("Bob")
const [lastName, setLastName] = useState("Smith")
  return <div>Hello</div>
}`,
  {
    semi: false,
    parser: 'babel',
  }
)

export default function StateToUseState() {
  return (
    <div id="translation_state">
      <h4>State to useState</h4>
      <p>
        In this example, stateful logic from the class component can be
        implemented with the useState hook. Destructuring the output from
        useState gives access to the state variable (firstName) and a function
        that can set it (setFirstName).
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
            <a id="setState-ex-idx" href="https://reactjs.org/docs/hooks-state.html" target="_blank">
              React Documentation On useState
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
