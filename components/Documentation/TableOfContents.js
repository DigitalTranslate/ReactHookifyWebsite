import React from 'react'
import Drawer from '@material-ui/core/Drawer'

export default function TableOfContents() {
  return (
    <Drawer variant="permanent" anchor="left">
      <ul id="menu">
        <li>
          <a href="#doc_title">About</a>
          <ul>
            <li>
              <a href="#about_main">What is React Hookify?</a>
            </li>
            <li>
              <a href="#why-hooks">Why Use Hooks?</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#installation-idx">Installation</a>
          <ul>
            <li>
              <a href="#usage-idx">Usage</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#examples-idx">Examples</a>
          <ul>
            <li>
              <a href="#translations">Class to Function</a>
            </li>
            <li>
              <a href="#useState-ex-idx">State to useState</a>
            </li>
            <li>
              <a href="#setState-ex-idx">setState</a>
            </li>
            <li>
              <a href="#useEffect-ex-idx">Lifecycle to useEffect</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#limitations-idx">Limitations</a>
        </li>
      </ul>
      <style jsx>
        {`
          #menu {
            width: 16.8em;
            padding-top: 3em;
            font-weight: 200;
          }
          #menu a {
            color: black;
            transition: color 0.3s ease;
          }
          #menu a:hover {
            color: #90a9b7;
          }
          #menu li,
          #menu ul {
            margin-top: 0.7em;
          }
        `}
      </style>
    </Drawer>
  )
}
