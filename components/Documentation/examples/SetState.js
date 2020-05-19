import Highlight from 'react-highlight.js';
import Container from '@material-ui/core/Container';

const input = `onClick={() => {
    this.setState({
    firstName: 'Tom',
    lastName: 'Hanks',
    })
    }}`;

const results = `nClick={() => {
    setFirstName("Tom")
    setLastName("Hanks")
    }}`;

export default function SetState() {
  return (
    <div id="translation_setstate">
      <h4>setState</h4>
      <div id="documentation_links">
        <h5>Articles and Documentation</h5>
        <ul>
          <li>
            <a href="https://reactjs.org/docs/hooks-state.html" target="_blank">
              React Documentation On State Hooks
            </a>
          </li>
        </ul>
      </div>
      <Container maxWidth="md">
        <h5>Input:</h5>
        <Highlight language={'javascript'}> {input}</Highlight>
        <h5>Output:</h5>
        <Highlight language={'javascript'}> {results}</Highlight>
      </Container>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
        tincidunt purus. Curabitur tincidunt enim nec nisi accumsan ullamcorper.
        Maecenas at massa vel sapien feugiat eleifend in non massa.
      </p>
      <hr />
    </div>
  );
}
