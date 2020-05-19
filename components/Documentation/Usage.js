import Container from '@material-ui/core/Container'
import React from 'react'

export default function Installation() {
  return (
    <div id="installation">
      <h2>Usage</h2>
      <p>
        React-Hookify is a CLI tool. It will not alter your current file,
        instead a new 'hookified' file will be created next to the file you run
        it on.
      </p>
      <div id="usage_example">
        <Container maxWidth="sm">
          Run the command 'hookify' on the file path name:
          <div className="grey">hookify client/app.js</div>
          If file is in your current directory:
          <div className="grey">hookify app.js</div>
          Can accept multiple files at once:
          <div className="grey">hookify app1.js app2.js</div>
        </Container>
      </div>
    </div>
  )
}
