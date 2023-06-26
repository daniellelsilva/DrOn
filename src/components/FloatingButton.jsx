import React from 'react';
import { Icon } from '@iconify/react';
import { IconButton } from '@mui/material';

export default function FloatingButton() {
  return (
    <IconButton
      href='https://wa.me/5549991345099'
      target='_blank'
      id='floating-btn'
      type='button'
      variant="contained"
    >
      <Icon id='floating-btn-icon' icon="ic:baseline-whatsapp" />
    </IconButton>
  )
}
