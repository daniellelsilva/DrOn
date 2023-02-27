import React from 'react';
import { motion } from "framer-motion";

import phone1 from '../../images/phone1.svg';
import phone2 from '../../images/phone2.svg';
import drOnApp from '../../images/DR.ONAPP.svg';
import drOnLogo from '../../images/drOnLogo.svg';
import appleStore from '../../images/appleStore.svg';
import googlePlay from '../../images/googlePlay.svg';
import decorativeCircle1 from '../../images/circle1.svg';
import decorativeCircle2 from '../../images/circle2.svg';
import decorativeCircle3 from '../../images/circle3.svg';
import decorativeCircle4 from '../../images/circle4.svg';
import decorativeCircle5 from '../../images/circle5.svg';

import './AppView.scss'

export default function AppView() {
  const tagVariants = {
    offscreen:{
      opacity: 0,
      x: 50
    },
    onscreen: index => ({
      opacity: 1,
      x: 0,
      transition: { duration: .8, delay: index * .2 }
    }),
  }

  const tagsText = [
    {
      text: 'Curadoria especializada'
    },
    {
      text: 'Simpósios exclusivos'
    },
    {
      text: 'Méticas de redes sociais'
    },
    {
      text: 'Dr.Talks (podcats)'
    },
  ];

  return (
    <motion.main
      className='app'
      // initial="offscreen"
      // whileInView="onscreen"
      // viewport={{ once: true, amount: 0.8 }}    
    >
      <div className='app-phone1'>
        <img src={phone1} alt="demonstração do app" className='app-phone1-img'/>
      </div>

      <div className='app-phone2'>
        <img src={phone2} alt="demonstração do app" className='app-phone2-img'/>
      </div>

      <section className='app-text'>
        <img src={drOnApp} alt="Dr.On App logo"/>
        <p className='app-text-1'>Health EdTech</p>

        <div className='app-text-info'>
          <p className='app-text-info-1'>Dr.On®t é uma EdTech que reúne em um só aplicativo toda inteligência digital, em negócios e carreira que o médico precisa.<span> Todos os assuntos que a faculdade não ensina para se posicionar no mercado de forma prática e ética.</span></p>

          <p className='app-text-info-2'>Nós oferecemos curadoria especializada em diversos assuntos que não foram abordados durante sua formação: Marketing médico, Direito médico, Educação financeira, Educação para investimentos e administração do seu negócio e em breve muito mais.</p>

          <p className='app-text-info-3'>Todo médico empreendedor deve conhecer!</p>
        </div>
        
        <motion.div
          className='app-text-tags'
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true}}
        >
          {tagsText.map((tag, index) => (
            <motion.div
              className='app-text-tag'
              variants={tagVariants}
              custom={index}
            >
              <p>{tag.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className='app-download'>
        <img src={drOnLogo} alt="Dr,On logo" className='app-download-logo'/>
        <div className='app-download-links'>
          <a
            rel="noreferrer"
            target="_blank"
            href='https://apps.apple.com/br/app/dr-on/id1545991089'
            className='app-download-apple'
          >
            <div >
              <img src={appleStore} alt="apple store link" />
            </div>
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href='https://play.google.com/store/apps/details?id=br.com.mobiup.dron'
            className='app-download-google'
          >
            <div >
              <img src={googlePlay} alt="google play link" />
            </div>
          </a>
        </div>
      </div>
      
      <div className='decorative-circles'>
        <img className='decorative-circle decorative-circle-1' src={decorativeCircle1} alt="" />
        <img className='decorative-circle decorative-circle-2' src={decorativeCircle2} alt="" />
        <img className='decorative-circle decorative-circle-3' src={decorativeCircle3} alt="" />

        <img className='decorative-circle decorative-circle-4' src={decorativeCircle4} alt="" />
        <img className='decorative-circle decorative-circle-5' src={decorativeCircle5} alt="" />
      </div>
        
    </motion.main>
    )
}
