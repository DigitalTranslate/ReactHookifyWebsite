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
          Any comments in a class component file will be removed in the new
          'hookified' file.
        </li>
        <li>
          React Hookify does not currently support 'get', 'set', and 'static'
          keywords.
        </li>
        <li>
          Lifecycle methods do not always map 1 to 1 with React Hooks. The
          article below (written by a React developer) highlights many of the
          differences. Sometimes it is necessary to rewrite code. Currently, the
          only lifecycle methods that React Hookify supports are
          componentDidMount, componentDidUpdate, and componentWillUnmount.
        </li>
      </ul>
      <div id="documentation_links">
        <h5 id="read-more">Read More:</h5>
        <ul id="bullets">
          <li>
            <a
              href="https://overreacted.io/a-complete-guide-to-useeffect/"
              target="_blank"
            >
              A Complete Guide to useEffect
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
