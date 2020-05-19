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

export default function LifeCycleToUseEffect() {
  return (
    <div id="translation_lifecycle">
      <div>
        <h4>Lifecycle to useEffect</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
          tincidunt purus. Curabitur tincidunt enim nec nisi accumsan
          ullamcorper. Maecenas at massa vel sapien feugiat eleifend in non
          massa.
        </p>
      </div>
      <Container maxWidth="md">
        <h5>Input:</h5>
        <Highlight language={'javascript'}>
          {' '}
          {`componentDidMount() {
    console.log('start');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('update');
  }

  componentWillUnmount() {
    console.log('end');
  }`}
        </Highlight>
        <h5>Output:</h5>
        <Highlight language={'javascript'}>
          {' '}
          {`useEffect(() => {
    console.log("start")
  }, [])
  useEffect(() => {
    console.log("update")
  })
  useEffect(() => {
    return () => {
      console.log("end")
    }
  }, [])`}
        </Highlight>
      </Container>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
        tincidunt purus. Curabitur tincidunt enim nec nisi accumsan ullamcorper.
        Maecenas at massa vel sapien feugiat eleifend in non massa.
      </p>

      <Container maxWidth="md">
        <h5>Input:</h5>
        <Highlight language={'javascript'}>
          {' '}
          {`componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter !== this.state.counter) {
      console.log(this.state.counter);
    }
  }`}
        </Highlight>
        <h5>Output:</h5>
        <Highlight language={'javascript'}>
          {' '}
          {`useEffect(() => {
    console.log(counter)
  }, [counter])`}
        </Highlight>
      </Container>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
        tincidunt purus. Curabitur tincidunt enim nec nisi accumsan ullamcorper.
        Maecenas at massa vel sapien feugiat eleifend in non massa.
      </p>

      <Container maxWidth="md">
        <h5>Input:</h5>
        <Highlight language={'javascript'}>
          {' '}
          {`componentDidMount() {
    console.log('start');
    console.log(counter);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter !== this.state.counter) {
      console.log(counter);
    }
  }`}
        </Highlight>
        <h5>Output:</h5>
        <Highlight language={'javascript'}>
          {' '}
          {`useEffect(() => {
    console.log("start")
  }, [])

  useEffect(() => {
    console.log(counter)
  }, [counter])`}
        </Highlight>
      </Container>
      <div id="documentation_links">
        <h5 id="read-more">Read More:</h5>
        <ul id="bullets">
          <li>
            <a
              href="https://reactjs.org/docs/hooks-effect.html"
              target="_blank"
            >
              React Documentation On useEffect
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
