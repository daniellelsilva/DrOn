import React from 'react';
import { Carousel } from '@mantine/carousel';
import event1 from './Images/001.png';
import event2 from './Images/002.png';
import event3 from './Images/003.png';
import event4 from './Images/004.png';
import event5 from './Images/005.png';
import event6 from './Images/006.png';
import event7 from './Images/007.png';
import event8 from './Images/008.jpeg';
import event9 from './Images/009.jpeg';
import event10 from './Images/010.jpeg';
import event11 from './Images/011.jpeg';

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
    eventName: "Marketing Estratégico para Médicos (Expo Hospital Brasil) - Belo Horizonte, MG",
    subject: "Marketing Médico",
    phrase: "O consultório é um negócio, o paciente é o cliente e o colega é o concorrente",
  },
  {
    id: 3,
    src: event3,
    alt: "event image",
    eventName: "Mercado Médico (AMMG) - Belo Horizonte, MG",
    subject: "Marketing Médico",
    phrase: "O relacionamento com pacientes como estratégia de posicionamento",
  },
  {
    id: 4,
    src: event4,
    alt: "event image",
    eventName: "Palestra Mercado Médico (Unimed) - Caruaru, PE",
    subject: "Marketing Estratégico",
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
    eventName: "IVF Talks “Gestor 360” (SBRA) - São Paulo, SP",
    subject: "Mecanismos de monitoramento de redes sociais como otimizadores de tempo médico",
    phrase: "A velocidade da informação na internet utilizada em favor do médico empreendedor",
  },
  {
    id: 8,
    src: event8,
    alt: "event image",
    eventName: "Curso para secretárias (Expo Hospital Brasil) - Belo Horizonte, MG",
    subject: "Como transformar a secretária em gestora de relacionamento com pacientes",
    phrase: "A secretária como agente fundamental de relacionamento com pacientes",
  },
  {
    id: 9,
    src: event9,
    alt: "event image",
    eventName: "Dr.Talks® (Expo Hospital Brasil) - Belo Horizonte, MG",
    subject: "Liderança/Marketing Digital/Ferramentas Digitais/Empreendedorismo Médico/Jornada do Paciente",
    phrase: "O paciente é digital, o Doutor precisa estar “ON”. Um evento Dr.On® na Expo",
  },
  {
    id: 10,
    src: event10,
    alt: "event image",
    eventName: "Simpósio da Universidade Federal da Fronteira Sul - Chapecó, SC",
    subject: "O marketing de relacionamento digital com pacientes",
    phrase: "A digitalização do relacionamento com pacientes e as estratégias de marketing para otimizá-lo",
  },
  {
    id: 11,
    src: event11,
    alt: "event image",
    eventName: "Expo Hospital Brasil (Grupo Mira) - Belo Horizonte, MG",
    subject: "O marketing como estratégia de diferenciação de carreira médica",
    phrase: "Médicos empreendedores têm perfil diferente de empreendedores que fazem medicina",
  },
]

export default function Events() {
  const slide = () => (
    images.map((image) => (
      <Carousel.Slide key={image.id} className="slide">
        <div className="slide-img">
          <img src={image.src} alt={image.alt}/>
        </div>
        
        <div className="slide-info">
          <div className="slide-title">
            <p>{image.eventName}</p>
            <p>{image.subject}</p>
          </div>
          
          <p className="slide-phrase">{image.phrase}</p>
        </div>
      </Carousel.Slide>
    ))
  )

  return (
    <main className='events'>
      <Carousel
        slideSize="70%"
        // height={230}
        slideGap="md"
        withIndicators
        loop
      >
        {slide()}
      {/* ...other slides */}
    </Carousel>
    </main>
  )
}
