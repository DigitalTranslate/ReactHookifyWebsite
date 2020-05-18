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
        <Container maxWidth="sm">
          <h5>Input:</h5>
          <Highlight language={'javascript'}> {input}</Highlight>
          <h5>Output:</h5>
          <Highlight language={'javascript'}> {results}</Highlight>
        </Container>
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
        <hr />
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
        <hr />
      </div>
    </div>
  );
}
