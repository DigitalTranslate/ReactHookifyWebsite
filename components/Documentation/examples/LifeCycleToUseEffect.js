import Highlight from 'react-highlight.js';
import Container from '@material-ui/core/Container';

const input = `import React, { Component } from 'react';
export default class Test extends Component {
  render() {
    return <div>TEST</div>;
  }
}`;

const results = `import React from "react"
export default function Test() {
  return <div>TEST</div>
}`;

export default function LifeCycleToUseEffect() {
  return (
    <div id="translation_lifecycle">
      <div>
        <h4>Lifecycle to useEffect</h4>
        <p>
          Below is an example of how lifecycle methods like componentDidMount,
          componentDidUpdate, and componentWillUnmount are translated into
          useEffects. Although there is alot of overlap in the functionality of
          lifecycles and useEffects; useEffects allow for more control and
          organization.
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
          {`//componentDidMount
  useEffect(() => {
    console.log("start")
  }, [])

  //componentDidUpdate
  useEffect(() => {
    console.log("update")
  })

  //componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("end")
    }
  }, [])`}
        </Highlight>
      </Container>

      <p>
        One thing useEffect can do is update on a given variable. This is done
        by passing the variable into the second arguement of the useEffect as an
        array.
      </p>

      <p>
        If you were using lifecycles to update on a specific variable you might
        write a conditional like the one below, using prevProps or prevState.
        Hookify is capable of handling conditionals like this and will
        automatically grab the variable in the coditional and creating a
        useEffect accordingly.
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
  }, [props.counter])`}
        </Highlight>
      </Container>

      <p>
        With lifecycles if you want to perform the same logic regardless of
        whether the component just mounted or updated, you would have to write
        the same lines of code in componentDidMount and componentDidUpdate like
        in the example below.
      </p>
      <p>
        Hookify will find similiar lines of code in componentDidMount and
        componentDidUpdate and translate them into the same useEffect.
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
  );
}
