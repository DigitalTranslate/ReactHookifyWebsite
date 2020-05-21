import Highlight from 'react-highlight.js'
import Container from '@material-ui/core/Container'

export default function LimitationExamples() {
  return (
    <div id="translation_limitations">
      <p>
        React-Hookify is not designed to handle 100% of cases. Some limitations
        include:
      </p>
      <ul>
        <li className="li-limits">
          Any comments in a class component file will be removed in the new
          'hookified' file.
        </li>
        <li className="li-limits">
          React Hookify does not currently support 'get', 'set', and 'static'
          keywords.
        </li>
        <li className="li-limits">
          <b>
            React Hookify will not be able to translate instances where variable
            names do not actually exist on the current file.
          </b>{' '}
          The package is built with parsing logic that looks for variable
          patterns. This may come up when replacing the whole state with{' '}
          <span className="code-span">this.setState</span> and when using{' '}
          <b>controlled forms</b>.
          <ul>
            <li className="li-limits">
              If you try to replace the whole state using{' '}
              <span className="code-span">
                this.setState(this.props.newObject)
              </span>
              , React Hookify would not have access to the needed keys/values
              names that exist on newObject.
            </li>
            <li className="li-limits">
              Similarly, if you try to implement a controlled form, but the
              actual form component is written in a different file, React
              Hookify again would not be able to identify the needed form names
              and values.
            </li>
          </ul>
        </li>
        <li className="li-limits">
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
