import Container from '@material-ui/core/Container'
import React from 'react'

export default function Installation() {
  return (
    <div id="installation">
      <h2>Installation</h2>
      <p>
        Install with <code>npm</code>:
      </p>
      <div id="install_example">
        <Container maxWidth="sm">
          <p>
            Install with npm: <br />
          </p>
          <div id="usage-idx" className="grey">
            npm install -g react-hookify
          </div>
        </Container>
      </div>
    </div>
  )
}
