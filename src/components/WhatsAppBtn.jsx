import React from 'react';
import { Button } from '@mui/material'
import './Buttons.scss'

export default function WhatsAppBtn() {
  return (
    <Button
      href='https://wa.me/5549991345099'
      target='_blank'
      className='whats-btn'
      id='whats-btn'
      type='button'
      variant="contained"
    >
      <p>
        WhatsApp
      </p>
    </Button>
  )
}
