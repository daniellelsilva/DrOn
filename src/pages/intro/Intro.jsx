import React from 'react';
import Frame from '../../images/Frame.svg';
import Marcio1 from '../../images/Marcio1.svg';
import ProxyLogo from '../../images/Group.svg';
import Aspas from '../../images/aspas.svg';
import Place from '../../images/place.svg';
import MapIcon from '../../images/map.svg';
import People from '../../images/people.svg';
import Plant from '../../images/plant.svg';
import Star from '../../images/star.svg';

import './Intro.scss';

export default function Intro() {
  return (
    <main className='intro'>
      <img src={Marcio1} alt="Proxymed ceo" className='intro-marcio-img'/>
      <img src={ProxyLogo} alt="Proxymed logo" className='intro-proxy-img'/>

      <header className='intro-header'>
        <img src={Frame} alt="proxy logo" className='intro-header-img'/>
        <button type='button' className='intro-header-btn'>Entre em contato</button>
      </header>

      <section className='intro-main'>
        <div className='intro-main-title'>
          <img src={Aspas} alt="aspas" className='intro-quotation-marks'/>
          <p className='intro-title'>Medicina de futuro</p>
        </div>
        <div className='intro-text'>
          <p>SERVIÇO DE MENTORIA EM HEALTH BUSINESS</p>
          <p>Mentoria exclusiva, customizada, baseada na realidade do médico e do mercado onde está inserido. Não é um curso, é um acompanhamento para uma transformação empreendedora para que o médico possa se posicionar da maneira correta no mercado e principalmente, manter sua  marca bem posicionada junto aos seus pacientes, buscando a rentabilidade do consultório, com menos quantidade e mais qualidade.</p>
          <p>Tanto profissional quanto pessoal.</p>
        </div>
      </section>

      <section className='intro-icons'>
        <div className='intro-icons-icon'>
          <img src={Place} alt="place icon"/>
        </div>
        <div className='intro-icons-icon'>
          <img src={MapIcon} alt="map icon"/>
        </div>
        <div className='intro-icons-icon'>
          <img src={People} alt="people icon"/>
        </div>
        <div className='intro-icons-icon'>
          <img src={Plant} alt="plant icon"/>
        </div>
        <div className='intro-icons-icon'>
          <img src={Star} alt="star icon"/>
        </div>
      </section>
    </main>
    )
}
