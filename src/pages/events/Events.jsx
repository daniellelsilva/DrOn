import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Icon } from '@iconify/react';
import event1 from './Images/001.webp';
import event2 from './Images/002.webp';
import event3 from './Images/003.webp';
import event4 from './Images/004.webp';
import event5 from './Images/005.webp';
import event6 from './Images/006.webp';
import event7 from './Images/007.webp';
import event8 from './Images/008.webp';
import event9 from './Images/009.webp';
import event10 from './Images/010.webp';
import event11 from './Images/011.webp';

import './Events.scss';

const images = [
  {
    id: 1,
    src: event1,
    alt: "event image",
    eventName: "Executiva Nacional - Indaiatuba, SP",
    subject: "Indústria x Médicos - Como se diferenciar neste mercado?",
    phrase: "O relacionamento como diferencial competitivo",
  },
  {
    id: 2,
    src: event2,
    alt: "event image",
    eventName: "Expo Hospital Brasil - Belo Horizonte, MG",
    subject: "Marketing Estratégico para Médicos",
    phrase: "O consultório é um negócio, o paciente é o cliente e o colega é o concorrente",
  },
  {
    id: 3,
    src: event3,
    alt: "event image",
    eventName: "AMMG - Belo Horizonte, MG",
    subject: "Marketing Médico (Mercado Médico)",
    phrase: "O relacionamento com pacientes como estratégia de posicionamento",
  },
  {
    id: 4,
    src: event4,
    alt: "event image",
    eventName: "Unimed - Caruaru, PE",
    subject: "Marketing Estratégico (Palestra Mercado Médico)",
    phrase: "O médico empreendedor no mercado digital",
  },
  {
    id: 5,
    src: event5,
    alt: "event image",
    eventName: "Congresso Catarinense de Endocrinologia e Metabologia",
    subject: "Marketing Médico",
    phrase: "Marketing como diferencial estratégico na carreira médica",
  },
  {
    id: 6,
    src: event6,
    alt: "event image",
    eventName: "Clínica FertLiv - Campo Grande, MS",
    subject: "Empreendedorismo Médico Digital",
    phrase: "A clínica é um negócio digital, a recepção é virtual. Como se dá a jornada do paciente na internet",
  },
  {
    id: 7,
    src: event7,
    alt: "event image",
    eventName: "SBRA - São Paulo, SP",
    subject: "Mecanismos de monitoramento de redes sociais como otimizadores de tempo médico",
    phrase: "A velocidade da informação na internet utilizada em favor do médico empreendedor",
  },
  {
    id: 8,
    src: event8,
    alt: "event image",
    eventName: "Expo Hospital Brasil – Belo Horizonte, MG",
    subject: "Curso para secretárias",
    phrase: "Como transformar a secretária em gestora de relacionamento com pacientes - A secretária como agente fundamental de relacionamento com pacientes",
  },
  {
    id: 9,
    src: event9,
    alt: "event image",
    eventName: "Expo Hospital Brasil – Belo Horizonte, MG",
    subject: "Dr.Talks®: O médico do futuro",
    phrase: 'O paciente é digital, o Doutor precisa estar "ON". Um evento Dr.On® na Expo - Liderança/Marketing Digital/Ferramentas Digitais/Empreendedorismo Médico/Jornada do Paciente',
  },
  {
    id: 10,
    src: event10,
    alt: "event image",
    eventName: "Simpósio da UFFS – Chapecó, SC",
    subject: "O marketing de relacionamento digital com pacientes",
    phrase: "A digitalização do relacionamento com pacientes e as estratégias de marketing para otimizá-lo",
  },
  {
    id: 11,
    src: event11,
    alt: "event image",
    eventName: "Expo Hospital Brasil (Grupo Mira) – Belo Horizonte, MG",
    subject: "O marketing como estratégia de diferenciação de carreira médica",
    phrase: "Médicos empreendedores têm perfil diferente de empreendedores que fazem medicina",
  },
]

export default function Events() {
  const slide = () => (
    images.map((image) => (
      <Carousel.Slide key={image.id} className="slide">
        <div className={`slide-img slide-img-${image.id}`} />
        
        <div className="slide-info">
          <div className="slide-title">
            <div className='slide-title-div slide-title-div-1'>
              <p>{image.eventName}</p>
            </div>

            <div className='slide-title-div slide-title-div-2'>
              <p>{image.subject}</p>
            </div>
          </div>
          
          <p className="slide-phrase">{image.phrase}</p>
        </div>
      </Carousel.Slide>
    ))
  )

  return (
    <section className='events'>
      <section className='events-title'>
        <p>Participação em eventos</p>
        <p>Palestras</p>
      </section>
      <Carousel
        slideSize="80%"
        align='center'
        loop
        slideGap="md"
        controlSize={50}
        nextControlIcon={<Icon icon="ic:round-navigate-next" fontSize={45}/>}
        previousControlIcon={<Icon icon="ic:round-navigate-next" fontSize={45} rotate={2}/>}
        styles={{
          control: {
              backgroundColor: '#3848F1',
              border: 'none',
              color: '#FFFFFF',
              height: '64px',
              width: '64px',
              marginTop: '-8%'             
          },
        }}
      >
        {slide()}
    </Carousel>
    </section>
  )
}
