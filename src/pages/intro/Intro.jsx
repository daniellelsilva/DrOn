import React from 'react';
import Frame from '../../images/Frame.svg';
import Marcio1 from '../../images/Marcio1.svg';
import ProxyLogo from '../../images/Group.svg';
import Aspas from '../../images/aspas.svg'

import './Intro.scss'

export default function Intro() {
  return (
    <main>
      <img src={Marcio1} alt="Proxymed ceo" className='intro-marcio-img'/>
      <img src={ProxyLogo} alt="Proxymed logo" className='intro-proxy-img'/>

      <header className='intro-header'>
        <img src={Frame} alt="proxy logo" className='intro-header-img'/>
        <button type='button' className='intro-header-btn'>Entre em contato</button>
      </header>

      <section>
        <div className='intro-title-quotation'>
          <img src={Aspas} alt="aspas" className='intro-title-quotation'/>
          <p>Medicina de futuro</p>
        </div>
        <div>
          <p>SERVIÇO DE MENTORIA EM HEALTH BUSINESS</p>
          <p>Mentoria exclusiva, customizada, baseada na realidade do médico e do mercado onde está inserido. Não é um curso, é um acompanhamento para uma transformação empreendedora para que o médico possa se posicionar da maneira correta no mercado e principalmente, manter sua  marca bem posicionada junto aos seus pacientes, buscando a rentabilidade do consultório, com menos quantidade e mais qualidade.</p>
          <p>Tanto profissional quanto pessoal.</p>
        </div>
      </section>
    </main>
    )
}
