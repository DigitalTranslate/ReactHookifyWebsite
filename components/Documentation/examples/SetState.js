import Highlight from 'react-highlight.js'
import Container from '@material-ui/core/Container'
import prettier from 'prettier-standalone'


const input = prettier.format(
  `import React, { Component } from "react"

class App extends Component {
  constructor() {
    this.state = {
      firstName: "Bob",
      lastName: "Smith"
    }
  }

  render() {
    return <button onClick={() =>
      this.setState = {
      firstName: "Bob",
      lastName: "Smith"
    }}>
    Click Here!</button>
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
  const [firstName, setFirstName] = useState("Bob")
  const [lastName, setLastName] = useState("Smith")

  return <button onClick={() => {
    setFirstName("Tom")
  setLastName("Hanks")
  }}>Click Here!</button>
}`,
  {
    semi: false,
    parser: 'babel',
  }
)

export default function SetState() {
  return (
    <div id="translation_setstate">
      <h4>setState</h4>
      <p>
        The example below shows how to set state with the useState hook.
        useState returns an array with the following structure: [variableName,
        setVariableName]. The second element can be used to set state.
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
            <a href="https://reactjs.org/docs/hooks-state.html" target="_blank">
              React Documentation On State Hooks
            </a>
          </li>
        </ul>
      </div>
      <hr id="useEffect-ex-idx" />
    </div>
  )
}
