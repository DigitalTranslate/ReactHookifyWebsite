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

export default function Translations() {
  return (
    <div id="translations">
      <h2>How Hookify Works</h2>
      <hr />
      <div id="translation_class">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
          tincidunt purus. Curabitur tincidunt enim nec nisi accumsan
          ullamcorper. Maecenas at massa vel sapien feugiat eleifend in non
          massa. Maecenas tincidunt libero vel orci dapibus posuere. Suspendisse
          fringilla vulputate ante non condimentum. Proin lectus magna, luctus
          quis lectus id, ornare condimentum nisi. Suspendisse efficitur turpis
          erat, vitae placerat mauris luctus vitae. Suspendisse sit amet felis
          at lacus aliquet fringilla accumsan et enim. Sed a ex nec nibh
          hendrerit gravida.
        </p>
        <h4>Class to Function</h4>
        <div id="documentation_links">
          <h5>Articles and Documentation</h5>
          <ul>
            <li>
              <a
                href="https://reactjs.org/docs/hooks-intro.html"
                target="_blank"
              >
                React Documentation On Hooks
              </a>
            </li>
          </ul>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
          tincidunt purus. Curabitur tincidunt enim nec nisi accumsan
          ullamcorper. Maecenas at massa vel sapien feugiat eleifend in non
          massa.
        </p>
        <div id="translation_code_examples">
          <Container maxWidth="md">
            <h5>Input:</h5>
            <Highlight language={'javascript'}>
              {' '}
              {`import React, { Component } from 'react';
export default class Test extends Component {
  render() {
    return <div>TEST</div>;
  }
}`}
            </Highlight>
            <h5>Output:</h5>
            <Highlight language={'javascript'}>
              {' '}
              {`import React from "react"
export default function Test() {
  return <div>TEST</div>
}`}
            </Highlight>
          </Container>
        </div>
      </div>

      <div id="translation_state">
        <h4>State to useState</h4>
        <div id="documentation_links">
          <h5>Articles and Documentation</h5>
          <ul>
            <li>
              <a
                href="https://reactjs.org/docs/hooks-state.html"
                target="_blank"
              >
                React Documentation On useState
              </a>
            </li>
          </ul>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
          tincidunt purus. Curabitur tincidunt enim nec nisi accumsan
          ullamcorper. Maecenas at massa vel sapien feugiat eleifend in non
          massa.
        </p>
        <Container maxWidth="md">
          <h5>Input:</h5>
          <Highlight language={'javascript'}>
            {' '}
            {`constructor() {
    super();
    this.state = {
      firstName: 'Bob',
      lastName: 'Smith',
    };
  }`}
          </Highlight>
          <h5>Output:</h5>
          <Highlight language={'javascript'}>
            {' '}
            {`const [firstName, setFirstName] = useState("Bob")
 const [lastName, setLastName] = useState("Smith")`}
          </Highlight>
        </Container>
      </div>

      <div id="translation_setstate">
        <h4>setState</h4>
        <div id="documentation_links">
          <h5>Articles and Documentation</h5>
          <ul>
            <li>
              <a
                href="https://reactjs.org/docs/hooks-state.html"
                target="_blank"
              >
                React Documentation On State Hooks
              </a>
            </li>
          </ul>
          <Container maxWidth="md">
            <h5>Input:</h5>
            <Highlight language={'javascript'}>
              {' '}
              {`onClick={() => {
    this.setState({
      firstName: 'Tom',
      lastName: 'Hanks',
    })
  }}`}
            </Highlight>
            <h5>Output:</h5>
            <Highlight language={'javascript'}>
              {' '}
              {`onClick={() => {
      setFirstName("Tom")
      setLastName("Hanks")
  }}`}
            </Highlight>
          </Container>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
          tincidunt purus. Curabitur tincidunt enim nec nisi accumsan
          ullamcorper. Maecenas at massa vel sapien feugiat eleifend in non
          massa.
        </p>
        <hr />
      </div>

      <div id="translation_lifecycle">
        <h4>Lifecycle to useEffect</h4>
        <div id="documentation_links">
          <h5>Articles and Documentation</h5>
          <ul>
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
      <hr />
    </div>
  );
}
