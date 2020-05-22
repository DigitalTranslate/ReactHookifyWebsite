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
        <h4>Lifecycle Method to useEffect</h4>
        <p>
          The example below shows how lifecycle methods like componentDidMount,
          componentDidUpdate, and componentWillUnmount are translated into
          useEffect. While there is significant overlap in the functionality of
          lifecycles and useEffect, useEffect is not built to exactly mirror
          lifecycles. useEffect centers around the side effects caused to the
          functional component, not the timing of lifecycle calls. Please see
          the limitations section for more information.
        </p>
      </div>
      <div id="translation_code_examples">
        <Container maxWidth="md">
          <h5>Input:</h5>
          <Highlight language={'javascript'}>
            {' '}
            {`componentDidMount() {
    console.log('Mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated');
  }

  componentWillUnmount() {
    console.log('Unmounted');
  }`}
          </Highlight>
          <h5>Output:</h5>
          <Highlight language={'javascript'}>
            {' '}
            {`//componentDidMount
  useEffect(() => {
    console.log("Mounted")
  }, [])

  //componentDidUpdate
  useEffect(() => {
    console.log("Updated")
  })

  //componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Unmounted")
    }
  }, [])`}
          </Highlight>
        </Container>
      </div>

      <p>
        useEffect can also conditionally update your component based on a props
        or state variable. The example below shows how this conditional logic
        from componentDidUpdate can be converted into a useEffect using
        useEffect's second argument.
      </p>
      <div id="translation_code_examples">
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
  }, [props.counter])`}
          </Highlight>
        </Container>
      </div>

      <p>
        Lifecycle methods often force you to split the same logic into multiple
        methods. If you want a statement to run on componentDidMount and
        componentDidUpdate, the same statement must be written in both methods.
        With useEffect, this logic can be combined.
      </p>
      <p>
        Hookify will find similiar lines of code in componentDidMount and
        componentDidUpdate and translate them into the same useEffect.
      </p>

      <div id="translation_code_examples">
        <Container maxWidth="md">
          <h5>Input:</h5>
          <Highlight language={'javascript'}>
            {' '}
            {`componentDidMount() {
    console.log('Mounted');
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
    console.log("Mounted")
  }, [])

  useEffect(() => {
    console.log(counter)
  }, [counter])`}
          </Highlight>
        </Container>
      </div>
      <div id="documentation_links" className="add-margin">
        <h5 id="read-more">Read More:</h5>
        <ul id="bullets">
          <li>
            <a
              id="limitations-idx"
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
