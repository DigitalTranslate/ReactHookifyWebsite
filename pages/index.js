/* eslint-disable react/react-in-jsx-scope */
import Layout from '../components/Layout'
import Button from '@material-ui/core/Button'
import utilStyles from '../styles/utils.module.css'

// THIS IS OUR HOMEPAGE AND IS SERVED UP AT '/'
export default function Home() {
  return (
    <Layout>
      <div className="home-container">
        <img src="reacthooks.png" alt="logo" />
      </div>
      <div className="">
        <div className="about-container">
          <div className="about-details">
            <h1>Installation</h1>
            <span>Install React Hookify's source files globally via npm.</span>
            <div className="code-block">$ npm install -g react-hookify</div>
            <hr />
            <Button variant="text" color="default">
              Read Docs
            </Button>
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
            <Button variant="text" classes={utilStyles.whitebutton}>
              Read Docs
            </Button>
          </div>
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
            background-color: #080808;
            display: flex;
            justify-content: center;
            padding-top: 3em;
            padding-bottom: 3em;
          }
          .home-container img {
            height: 250px;
          }

          .about-container {
            display: flex;
            justify-content: center;
            background-color: #1c2632;
            color: white;
          }
          .about {
            padding: 20px;
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
          .code-block {
            padding: 16px;
            overflow: auto;
            direction: ltr;
            max-width: calc(100vw - 32px);
            border-radius: 4px;
            background-color: #272c34;
            -webkit-overflow-scrolling: touch;
            margin-top: 10px;
            margin-bottom: 5px;
          }
        `}
      </style>
    </Layout>
  )
}
