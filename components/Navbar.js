/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import GitHubIcon from '@material-ui/icons/GitHub'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <Link href="/">
          <a id="home-button">
            <img src="reacthooks.png" alt="home button" />
            <div id="logo-title">React Hookify</div>
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
        <a href="https://github.com/DigitalTranslate/ReactHookify">
          <GitHubIcon fontSize="large" />
        </a>
      </div>
      <style jsx>
        {`
          nav {
            position: fixed;
            top: 0;
            z-index: 10000;
            width: 100%;
            display: flex;
            flex-direction: row;
            background-color: #080808;
            height: 50px;
            align-items: center;
            justify-content: space-between;
            padding-left: 10em;
            padding-right: 10em;
          }
          .nav-right {
            display: flex;
            color: white;
            align-items: center;
          }
          .nav-right a {
            margin-left: 23px;
            color: white;
            transition: color 0.3s ease;
          }

          .nav-right a:hover {
            color: #90a9b7;
          }
          }
          .nav-left a {
            transition: margin-left 0.8s ease, color 0.3s ease;
            color: white;
          }
          .nav-left img {
            min-height: 2.4em;
            max-height: 2.4em;
            min-width: 59.9px;
            transition: margin-left 0.8s ease color 0.3s ease;
          }
          .nav-left a:hover {
            margin-left: 20px;
            color: #90a9b7;

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
