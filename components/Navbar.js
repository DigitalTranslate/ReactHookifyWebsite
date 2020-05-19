/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <Link href="/">
          <a id="home-button">
            <img src="reacthooks.png" alt="home button" />
            <div>React Hookify</div>
          </a>
        </Link>
      </div>
      <div className="nav-right">
        <Link href="/playground">
          <a>Demo</a>
        </Link>
        <Link href="/docs">
          <a>Documentation</a>
        </Link>
      </div>
      <style jsx>
        {`
          nav {
            display: flex;
            flex-direction: row;
            background-color: #080808;
            height: 50px;
            align-items: center;
            justify-content: space-between;
            padding-left: 10em;
            padding-right: 10em;
          }
          .nav-right a {
            margin-left: 23px;
          }
          .nav-left a {
            transition: margin-left 0.8s ease, color 0.3s ease;
          }
          .nav-left img {
            max-height: 2.4em;
            transition: margin-left 0.8s ease;
          }
          .nav-left a:hover {
            margin-left: 20px;
          }
          #home-button {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </nav>
  )
}
