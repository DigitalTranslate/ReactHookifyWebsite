import Container from '@material-ui/core/Container'
import React from 'react'

export default function Installation() {
  return (
    <div id="installation">
      <h2>Installation</h2>
      <div>
        Current Version: <b>1.0.13</b>
      </div>
      <div id="install_example">
        <Container maxWidth="sm">
          <p>
            Install with npm: <br />
          </p>
          <div className="grey">npm install -g react-hookify</div>
          <p>
            To update to a more recent version (if previously installed): <br />
          </p>
          <div className="grey">npm update -g react-hookify</div>
        </Container>
      </div>
    </div>
  )
}
