import React, {useState} from 'react';
import { Button, Snackbar} from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import './Buttons.scss';

export default function EmailBtn() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true)
    navigator.clipboard.writeText('EMAIL AQUI')
  }

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
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
        placement='top'
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        open={open}
      >
        <Button
          onClick={handleClick}
          // className='whats-btn'
          className={`email-btn ${open ? 'btn-cyan' : 'btn-blue'}`}
          type='button'
          variant="contained"
          sx={{
            fontSize: '2rem',
            fontWeight: 700,
            borderRadius: '9.7rem',
            textTransform: 'none'
          }}
        >
          {open === true ? 'Email copiado!' : 'Email'}
          {/* Email */}
        </Button>
      </LightTooltip>
    </>
  )
}
