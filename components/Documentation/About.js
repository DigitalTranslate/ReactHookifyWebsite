import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <div id="about_main">
      <h2>About</h2>
      <div id="about_hookify">
        <h4>What is React Hookify?</h4>
        <p>
          React Hookify is a command line tool that converts React class
          components into functional components <em>with Hooks</em>!{' '}
          <b>It will not alter your current code</b>; instead a new 'hookified'
          file is created. This tool provides a convenient way to update
          outdated code, or to help learn how Hooks work. Feel free to try it
          out with our{' '}
          <Link href="/playground">
            <a>Demo</a>
          </Link>
          !
        </p>
        <hr />
      </div>
      <div id="about_hooks">
        <h4>Why Use Hooks?</h4>
        <p>
          In version 16.8, React introduced Hooks. Hooks provide a way use
          stateful logic within a functional component. Simply put, they vastly
          reduce the need to use class components with React. Hooks address many
          of these issues that developers have struggled when using react:
        </p>
        <ul>
          <li>
            It is currently very difficult to re-use stateful logic within
            components. The only solutions before hooks were to utilize higher
            order functions or to render props down to many, many components{' '}
          </li>
          <li>
            Lifecycle methods force unrelated logic to be combined into a single
            method. This causes classes to be harder to understand and harder to
            test
          </li>
          <li>Classes and 'this' can be a barrier to learning react</li>
        </ul>
        While there are no plans to remove classes from React, hooks give React
        developers new tools to build their apps. Read more about hooks{' '}
        <a href="https://reactjs.org/docs/hooks-intro.html">here</a>.
        <hr />
      </div>
    </div>
  )
}
