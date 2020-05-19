import React from 'react'
import Drawer from '@material-ui/core/Drawer'

export default function TableOfContents() {
  return (
    <Drawer variant="permanent" anchor="left">
      <ul id="menu">
        <li>
          <a href="#about_main">About</a>
          <ul>
            <li>
              <a href="#about_hookify">What is React Hookify?</a>
            </li>
            <li>
              <a href="#about_hooks">Why Use Hooks?</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#installation">Installation</a>
        </li>
        <li>
          <a href="#translations">How React Hookify Works</a>
          <ul>
            <li>
              <a href="#translation_class">Class to Function</a>
            </li>
            <li>
              <a href="#translation_state">State to useState</a>
            </li>
            <li>
              <a href="#translation_setState">setState</a>
            </li>
            <li>
              <a href="#translation_lifecycle">Lifecycle to useEffect</a>
            </li>
          </ul>
        </li>
      </ul>
      <style jsx>
        {`
          #menu {
            width: 18em;
            padding-top: 60px;
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
            margin-top: 1em;
          }
        `}
      </style>
    </Drawer>
  )
}
