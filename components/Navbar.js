/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <Link href="/">
          <a>React Hookify</a>
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
            padding-left: 10px;
            padding-right: 10px;
          }
          .nav-right a {
            margin-left: 10px;
          }
        `}
      </style>
    </nav>
  )
}
