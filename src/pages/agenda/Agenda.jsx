import React from 'react';
import { motion } from "framer-motion";
import AgendaObject from './AgendaObject';
import WhatsAppBtn from '../../components/WhatsAppBtn';
import EmailBtn from '../../components/EmailBtn';

import './Agenda.scss';

export default function Agenda() {
  let leftVariants = {};
  let rightVariants = {};
  const isMobile = window.innerWidth < 700;

  if (!isMobile) {
    leftVariants = {
      offscreen:{
        opacity: 0,
        display: 'none',
        x: -200
      },
      onscreen: index => ({
        opacity: 1,
        display: 'flex',
        x: 0,
        transition: { duration: .9, delay: index * .2 }
      }),
    }
    rightVariants = {
      offscreen:{
        opacity: 0,
        display: 'none',
        x: 200
      },
      onscreen: index => ({
        opacity: 1,
        display: 'flex',
        x: 0,
        transition: { duration: .5, delay: index * .1 }
      }),
    }
  }
  return (
    <motion.main
      className='agenda'
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <div className='agenda-title'>
        <p>Agenda</p>
        <p>Próximos eventos</p>
      </div>

      <section className='agenda-events'>
        {AgendaObject.map((agenda, index) => (
          <div className='agenda-event' key={index}>
            <motion.div
              className='agenda-event-date'
              variants={leftVariants}
              custom={index}
            >
              <p>{agenda.day}</p>
              <p>{agenda.month}</p>
              <p>{agenda.year}</p>
            </motion.div>  
          
            <motion.div
              className='agenda-event-infos neon-border'
              variants={rightVariants}
              custom={index}
            >
              <div className='agenda-event-name'>
                <p>{agenda.event}</p>
                <p>{agenda.eventName}</p>
              </div>
            
              <p className='agenda-event-info'>{agenda.info}</p>
            </motion.div>
          </div>
        ))}
      </section>
      <section className='agenda-info neon-border'>
          <p className='agenda-info-p'>Dúvidas? Fale com a gente!</p>

          <div className='agenda-info-btns'>
            <WhatsAppBtn/>
            <EmailBtn/>
          </div>
      </section>

    </motion.main>
  )
}
