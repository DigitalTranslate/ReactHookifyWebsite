import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

export default function flexSnackbar(props) {
  const { severity, snackState, setOpen, message } = props

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={snackState}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MuiAlert
        severity={severity}
        elevation={6}
        variant="filled"
        onClose={handleClose}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  )
}
