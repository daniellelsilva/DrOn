import React from 'react';
import { Button } from '@mui/material'
import './Buttons.scss'

export default function EmailBtn() {
  return (
    <Button
      className='whats-btn'
      type='button'
      variant="contained"
      sx={{
        fontSize: '2rem',
        fontWeight: 700,
        borderRadius: '9.7rem',
        textTransform: 'none'
      }}
    >
      Email
    </Button>
  )
}
