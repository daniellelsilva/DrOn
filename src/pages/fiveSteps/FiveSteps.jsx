import React from 'react';
import { Icon } from '@iconify/react';
import WhatsAppBtn from '../../components/WhatsAppBtn';
import EmailBtn from '../../components/EmailBtn';

import './FiveSteps.scss';

export default function FiveSteps() {
  return (
    <main className='steps'>
      <section className='steps-title'>
        <p>Mentoria em Health Business</p>
        <p>5 passos</p>
      </section>

      <section className='steps-cards-section'>
        <div className='steps-cards'>
          <div className='steps-card steps-card-1'>
            <div className='steps-card-icon'>
              <Icon icon="mdi:map-marker" />
            </div>
            
            <div className='steps-card-text'>
              <p>Primeiro encontro</p>
              <p>Onde estou?</p>
            </div>
          </div>

          <div className='steps-card steps-card-2'>
            <div className='steps-card-icon'>
              <Icon icon="ri:treasure-map-fill" />
            </div>

            <div className='steps-card-text'>
              <p>Segundo encontro</p>
              <p>Para onde vou?</p>
            </div>
          </div>

          <div className='steps-card steps-card-3'>
            <div className='steps-card-icon'>
              <Icon icon="mdi:account-multiple" />
            </div>

            <div className='steps-card-text'>
              <p>Terceiro encontro</p>
              <p>Com quem eu vou?</p>
            </div>    
          </div>

          <div className='steps-card steps-card-4'>
            <div className='steps-card-icon'>
              <Icon icon="material-symbols:potted-plant" />
            </div>

            <div className='steps-card-text'>
              <p>Quarto encontro</p>
              <p>Seu plano</p>
            </div>
          </div>

          <div className='steps-card steps-card-5'>
            <div className='steps-card-icon'>
              <Icon icon="material-symbols:star-rate-rounded" />
            </div>

            <div className='steps-card-text'>
              <p>Quinto encontro</p>
              <p>Overview</p>
            </div>  
          </div>

        </div>
      </section>

      <section className='steps-info neon-border'>
        <div className='steps-info-text'>
          <p>Converse com a gente!</p>
          <p>Saiba mais sobre nossa mentoria, projetos complementares, convites para eventos, dúvidas gerais e tudo mais que você precisar! Basta escolher o meio de contato!</p>
        </div>
        
        <div className='steps-info-btns'>
          <WhatsAppBtn/>
          <EmailBtn/>
        </div>
      </section>
    </main>
  )
}
