import { Icon } from '@iconify/react';
import React from 'react';
import CarrerObject from './CarrerObject';
import ProxyLogo from '../../images/Group.svg';
import Marcio2 from '../../images/Marcio2.svg';


import './Carrer.scss';

export default function Carrer() {
  return (
    <main className='carrer'>
      <img src={ProxyLogo} alt="Proxymed logo" className='carrer-proxy-img'/>
      <img src={Marcio2} alt="Proxymed ceo" className='carrer-marcio-img'/>

      <div className='carrer-main'>
        <section className='carrer-name'>
          <p>MÁRCIO L L SOUZA</p>
          <p>Carreira</p>
        </section>

        <section className='carrer-steps'>
          {CarrerObject.map((item) => (
            <div className='carrer-step'>
              <div className='carrer-step-icon'>
                <Icon icon="material-symbols:star-rate-rounded" />
              </div>

              <div className='carrer-step-text'>
                <p>{item.title}</p>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
