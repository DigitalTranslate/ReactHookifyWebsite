/* eslint-disable react/react-in-jsx-scope */
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section with-logo">
          <img src="reacthooks.png" alt="footer image" />
          <Link href="/docs">
            <a>Docs</a>
          </Link>
        </div>

        <div className="footer-section">
          <LinkedInIcon fontSize="large" />
          <a href="https://www.linkedin.com/in/bailey-mckelway-720764113/">
            Bailey Mckelway
          </a>
          <a href="https://www.linkedin.com/in/cameron-ratliff/">
            Cameron Ratliff
          </a>
          <a href="https://www.linkedin.com/in/anderson-chan4574/">
            Anderson Chan
          </a>
        </div>
        <div className="footer-section">
          <GitHubIcon fontSize="large" />
          <a href="https://github.com/BaileyMcKelway">
            https://github.com/BaileyMcKelway
          </a>
          <a href="https://github.com/camr1993">https://github.com/camr1993</a>
          <a href="https://github.com/ac4574">https://github.com/ac4574</a>
        </div>
      </div>
      <style jsx>
        {`
          footer {
            display: flex;
            justify-content: center;
            background-color: #90a9b7;
            padding-bottom: 3em;
            padding-top: 1.7em;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 12rem;
            z-index: 10000;
          }
          .footer-container {
            display: flex;
            justify-content: center;
            width: 960px;
            max-width: 960px;
          }
          .footer-section {
            display: flex;
            flex-direction: column;
            width: 25%;
          }
          .footer-section a {
            padding-top: 5px;
            color: black;
            transition: color 0.3s ease;
          }
          .footer-section a:hover {
            color: #324A5F;
          }
          }
          footer img {
            width: 80px;
            margin: auto;
          }
          .with-logo {
            align-items: center;
          }
        `}
      </style>
    </footer>
  )
}
