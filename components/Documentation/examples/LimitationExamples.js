import Highlight from 'react-highlight.js'
import Container from '@material-ui/core/Container'

export default function LimitationExamples() {
  return (
    <div id="translation_limitations">
      <p>
        React-Hookify is not designed to handle 100% of cases. Some of its
        limitations include:
      </p>
      <ul>
        <li>
          Lifecycle methods do not always map 1 to 1 with React Hooks. Sometimes
          it is necessary to rewrite code. Please see the lifecycle section
          above for more information.
        </li>
        <li>
          Any comments in a class component file will be removed in the new
          'hookified' file
        </li>
        <li>
          The case of conditional return statements in a render method is not
          currently supported by React-Hookify
        </li>
      </ul>
      <div id="translation_code_examples">
        <Container maxWidth="md">
          <h5>Input:</h5>
          <Highlight language={'javascript'}>{}</Highlight>
          <h5>Output:</h5>
          <Highlight language={'javascript'}>{}</Highlight>
        </Container>
      </div>
      <div id="documentation_links">
        <h5 id="read-more">Read More:</h5>
        <ul id="bullets">
          <li>
            <a href="" target="_blank">
              Put any links here
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
