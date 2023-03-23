import React from 'react';
import { Button, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import './Buttons.scss';

export default function WhatsAppBtn() {
  return (
    <>
      <Button
        href='https://wa.me/5549991345099'
        target='_blank'
        className='whats-btn'
        id='whats-btn'
        type='button'
        variant="contained"
      >
        <p id='whats-btn-text'>
          WhatsApp
        </p>
        {/* <Icon icon="ic:baseline-whatsapp" id='whats-btn-icon' /> */}
        <Icon icon="ic:outline-whatsapp" id='whats-btn-icon' />
      </Button>

      <IconButton
        href='https://wa.me/5549991345099'
        target='_blank'
        className='whats-btn'
        id='whats-btn-phone-size'
        type='button'
        variant="contained"
      >
        <Icon icon="ic:outline-whatsapp" id='whats-btn-icon' />
      </IconButton>
    </>
  )
}
