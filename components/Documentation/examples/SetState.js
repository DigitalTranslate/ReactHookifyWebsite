import Highlight from 'react-highlight.js';
import Container from '@material-ui/core/Container';

const input = `onClick={() => {
  this.setState({
    firstName: 'Tom',
    lastName: 'Hanks',
  })
}}`;

const results = `onClick={() => {
  setFirstName("Tom")
  setLastName("Hanks")
}}`;

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
      <hr />
    </div>
  );
}
