import { Icon } from '@iconify/react';
import { m } from "framer-motion";
import React from 'react';
import CareerObject from './CareerObject';
import ProxyLogo from '../../images/Group.svg';
import Marcio2 from '../../images/Marcio2.svg';

import './Career.scss';

export default function Career() {
  const leftVariants = {
    offscreen:{
      opacity: 0,
      x: -200
    },
    onscreen: index => ({
      opacity: 1,
      x: 0,
      transition: { duration: .9, delay: index * .2 }
    }),
  };

  return (
    <m.section
      className='career'
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <img src={ProxyLogo} alt="Proxymed logo" className='career-proxy-img'/>
      <m.img
        src={Marcio2}
        alt="Proxymed ceo"
        className='career-marcio-img'
        initial={{ opacity: 0, x: 400}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        viewport={{ once: true }}
      />

      <div className='career-main'>
        <m.section
          className='career-name'
          initial={{ opacity: 0, x: 200}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 2, delay: .5 }}
          viewport={{ once: true }}
        >
          <p>MÁRCIO L L SOUZA</p>
          <p>Carreira</p>
        </m.section>

        <section className='career-steps'>
          {CareerObject.map((item, index) => (
            <m.div
              className='career-step'
              variants={leftVariants}
              custom={index}
              key={index}
            >
              <div className='career-step-icon'>
                <Icon icon="material-symbols:star-rate-rounded" />
              </div>

              <div className='career-step-text'>
                <p>{item.title}</p>
                <p>{item.subtitle}</p>
              </div>
            </m.div>
          ))}
        </section>
      </div>
    </m.section>
  )
}
