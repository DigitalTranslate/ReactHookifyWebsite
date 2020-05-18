/* eslint-disable react/react-in-jsx-scope */
import Layout from '../components/Layout'

// THIS IS OUR HOMEPAGE AND IS SERVED UP AT '/'
export default function Home() {
  return (
    <Layout>
      <div className="home-container">
        <img src="reacthooks.png" alt="logo" />
      </div>
      <div className="about-container">
        <div className="about">About React Hookify</div>
      </div>
      <style jsx>
        {`
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
            height: 30em;
            color: white;
          }
          .about {
            padding: 20px;
          }
        `}
      </style>
    </Layout>
  )
}
