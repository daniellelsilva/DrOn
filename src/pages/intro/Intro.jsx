import React from 'react';
import Frame from '../../images/Frame.svg';
import Marcio1 from '../../images/Marcio1.svg';
import ProxyLogo from '../../images/Group.svg';
import Aspas from '../../images/aspas.svg';
import { m } from "framer-motion";
import { Button } from '@mui/material';

import './Intro.scss';

export default function Intro() {

  return (
    <m.section
      className='intro'
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
    >
      <m.img
        src={Marcio1}
        alt="Proxymed ceo"
        className='intro-marcio-img'
        animate={{ x: [-100, 0], opacity: [0, .49] }}
        transition={{ ease: "easeOut", duration: 2 }}
      />
      <m.img
        src={ProxyLogo}
        alt="Proxymed logo"
        className='intro-proxy-img'
        animate={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ ease: "easeOut", duration: 2 }}
      />

      <header className='intro-header'>
        <img src={Frame} alt="proxy logo" className='intro-header-img'/>
        <Button href='https://wa.me/5549991345099' target='_blank' type='button' className='intro-header-btn'>Entre em contato</Button>
      </header>

      <m.section
        className='intro-main'
        animate={{ x: [200, 0], opacity: [0, 1] }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <div className='intro-main-title'>
          <img src={Aspas} alt="aspas" className='intro-quotation-marks'/>
          <p className='intro-title'>Medicina de futuro</p>
        </div>
        <div className='intro-text'>
          <p>SERVIÇO DE MENTORIA EM HEALTH BUSINESS</p>
          <p>Mentoria exclusiva, customizada, baseada na realidade do médico e do mercado onde está inserido. Não é um curso, é um acompanhamento para uma transformação empreendedora para que o médico possa se posicionar da maneira correta no mercado e principalmente, manter sua  marca bem posicionada junto aos seus pacientes, buscando a rentabilidade do consultório, com menos quantidade e mais qualidade.</p>
          <p>Tanto profissional quanto pessoal.</p>
        </div>
      </m.section>
    </m.section>
    )
}
