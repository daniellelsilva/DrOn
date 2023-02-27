import { Icon } from '@iconify/react';
import { motion } from "framer-motion";
import React from 'react';
import CarrerObject from './CarrerObject';
import ProxyLogo from '../../images/Group.svg';
import Marcio2 from '../../images/Marcio2.svg';


import './Carrer.scss';

export default function Carrer() {
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

  const rightVariants = {
    offscreen:{
      opacity: 0,
      x: 200
    },
    onscreen: index => ({
      opacity: 1,
      x: 0,
      transition: { duration: .9}
    }),
  };

  return (
    <motion.main
      className='carrer'
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <img src={ProxyLogo} alt="Proxymed logo" className='carrer-proxy-img'/>
      <motion.img
        src={Marcio2}
        alt="Proxymed ceo"
        className='carrer-marcio-img'
        variants={rightVariants}
      />

      <div className='carrer-main'>
        <motion.section
          className='carrer-name'
          variants={rightVariants}
        >
          <p>MÁRCIO L L SOUZA</p>
          <p>Carreira</p>
        </motion.section>

        <section className='carrer-steps'>
          {CarrerObject.map((item, index) => (
            <motion.div
              className='carrer-step'
              variants={leftVariants}
              custom={index}
            >
              <div className='carrer-step-icon'>
                <Icon icon="material-symbols:star-rate-rounded" />
              </div>

              <div className='carrer-step-text'>
                <p>{item.title}</p>
                <p>{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </motion.main>
  )
}
