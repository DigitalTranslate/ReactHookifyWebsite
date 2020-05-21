/* eslint-disable react/react-in-jsx-scope */
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import Head from 'next/head'

// THIS IS OUR HOMEPAGE AND IS SERVED UP AT '/'
export default function Home() {
  return (
    <>
      <Head>
        <title>React Hookify | Easing your transition into React Hooks</title>
        <meta
          name="og:title"
          content="React Hookify | Easing your transition into React Hooks"
        />
      </Head>
      <div className="home-container">
        <div className="home-buttons-container">
          <img src="reacthooks.png" alt="logo" />
          <div className="button-row">
            <Link href="/playground">
              <Button variant="contained" color="default">
                Try it out
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="contained" color="default">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="about-container motivation ">
        <div className="about-details motivation-text">
          <h1>What is React Hookify?</h1>
          <ul>
            <li>Command Line tool to...</li>
            <li>Built with...</li>
            <li>A way to learn more about React hooks!</li>
          </ul>
        </div>
        <div className="about-details motivation-text">
          <h1>Why?</h1>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Consectetur adipisicing elit.</li>
            <li>doloribus asperiores tempora.</li>
          </ul>
        </div>
      </div>
      <div className="about-container">
        <div className="about-details">
          <h1>Installation</h1>
          <span>Install React Hookify's source files globally via npm.</span>
          <div className="code-block">$ npm install -g react-hookify</div>
          <hr />
          <Link href="/docs">
            <Button variant="text" color="default">
              Read Docs
            </Button>
          </Link>
        </div>
        <div className="about-details">
          <h1>Usage</h1>
          <span>
            Use the 'hookify' command to create a functional component
            equivalent.
          </span>
          <div className="code-block">
            $ hookify {'<filepath of class component>'}
          </div>
          <hr />
          <Link href="/playground">
            <Button variant="text">Try Demo</Button>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          hr {
            width: 80%;
            opacity: 0.4;
          }
          h1 {
            margin-bottom: 10px;
          }
          .home-container {
            background-color: #24272b;
            display: flex;
            justify-content: center;
            padding-top: 3em;
            padding-bottom: 3em;
          }
          .button-row {
            display: flex;
            justify-content: center;
          }
          .about-container {
            display: flex;
            justify-content: center;
            background-color: #333c47;
            color: white;
            padding-top: 2em;
            padding-bottom: 2em;
            line-height: 1.6;
            font-size: 18px;
          }
          .about-details {
            display: flex;
            flex-direction: column;
            background-color: #2e4756;
            width: 25em;
            margin: 0.5em;
            margin-top: 2em;
            margin-bottom: 2em;
            padding: 1.1em;
          }
          .about-details h1 {
            font-family: 'Apple SD Gothic Neo', AppleSDGothicNeo, -apple-system,
              BlinkMacSystemFont, Helvetica, Arial, sans-serif;
            font-weight: lighter;
          }
          .motivation {
            background-color: #324a5f;
            padding-top: 1em;
            padding-bottom: 1em;
          }
          .motivation-text {
            background-color: #324a5f;
            font-family: 'Apple SD Gothic Neo', AppleSDGothicNeo, -apple-system,
              BlinkMacSystemFont, Helvetica, Arial, sans-serif;
            font-weight: normal;
            margin-right: 3em;
            margin-left: 3em;
          }
          .motivation-text h1 {
            font-family: 'Apple SD Gothic Neo', AppleSDGothicNeo, -apple-system,
              BlinkMacSystemFont, Helvetica, Arial, sans-serif;
            font-weight: lighter;
          }
          .code-block {
            font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
            font-size: 14px;
            padding: 13px;
            overflow: auto;
            direction: ltr;
            max-width: calc(100vw - 32px);
            border-radius: 4px;
            background-color: #272c34;
            -webkit-overflow-scrolling: touch;
            margin-top: 16px;
            margin-bottom: 14px;
          }
        `}
      </style>
    </>
  )
}
