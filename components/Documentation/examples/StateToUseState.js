import Highlight from 'react-highlight.js';
import Container from '@material-ui/core/Container';

const input = `constructor() {
    super();
    this.state = {
    firstName: 'Bob',
    lastName: 'Smith',
    };
    }`;

const results = `const [firstName, setFirstName] = useState("Bob")
const [lastName, setLastName] = useState("Smith")`;

export default function StateToUseState() {
  return (
    <div id="translation_state">
      <h4>State to useState</h4>
      <div id="documentation_links">
        <h5>Articles and Documentation</h5>
        <ul>
          <li>
            <a href="https://reactjs.org/docs/hooks-state.html" target="_blank">
              React Documentation On useState
            </a>
          </li>
        </ul>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
        tincidunt purus. Curabitur tincidunt enim nec nisi accumsan ullamcorper.
        Maecenas at massa vel sapien feugiat eleifend in non massa.
      </p>
      <Container maxWidth="md">
        <h5>Input:</h5>
        <Highlight language={'javascript'}> {input}</Highlight>
        <h5>Output:</h5>
        <Highlight language={'javascript'}> {results}</Highlight>
      </Container>
    </div>
  );
}
