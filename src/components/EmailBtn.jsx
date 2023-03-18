import React, {useState} from 'react';
import { Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import './Buttons.scss';

export default function EmailBtn() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true)
    navigator.clipboard.writeText('contato@doutoron.app')
  }

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip
      {...props}
      leaveDelay={3000}
      classes={{ popper: className }}
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#FFFFFF',
      color: '#0E1B48',
      boxShadow: theme.shadows[1],
      fontSize: 16,
      fontWeight: 400,
      fontFamily: 'Red Hat Display',
      padding: '2%'
    },
  }));

  return (
    <>
      <LightTooltip
        title="Email copiado para sua área de
        transferência. Basta colar no campo
        de destinatário em seu email!"
        arrow
        leaveDelay={5}
        placement='top'
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        open={open}
      >
        <Button
          onClick={handleClick}
          className={`email-btn ${open ? 'btn-cyan' : 'btn-blue'}`}
          id='email-btn'
          type='button'
          variant="contained"
        >
          <p>
            {open === true ? 'Email copiado!' : 'Email'}
          </p>
        </Button>
      </LightTooltip>
    </>
  )
}
