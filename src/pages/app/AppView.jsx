import React from 'react';
import phone1 from '../../images/phone1.svg';
import phone2 from '../../images/phone2.svg';
import drOnApp from '../../images/DR.ONAPP.svg'

import './AppView.scss'

export default function AppView() {
  return (
    <main className='app'>
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
        
        <div className='app-text-tags'>
          <div className='app-text-tag'>
            <p>Curadoria especializada</p>
          </div>

          <div className='app-text-tag'>
            <p>Simpósios exclusivos</p>
          </div>

          <div className='app-text-tag'>
            <p>Méticas de redes sociais</p>
          </div>

          <div className='app-text-tag'>
            <p>Dr.Talks (podcats)</p>
          </div>
        </div>
      </section>

      

      <div>
        LOGO E DOWNLOAD
      </div>
    </main>
    )
}
