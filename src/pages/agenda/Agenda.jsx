import React from 'react';
import AgendaObject from './AgendaObject';

import './Agenda.scss';

export default function Agenda() {
  return (
    <main className='agenda'>
      <div className='agenda-title'>
        <p>Agenda</p>
        <p>Próximos eventos</p>
      </div>

      <section className='agenda-events'>
        {AgendaObject.map((agenda) => (
          <div className='agenda-event'>
            <div className='agenda-event-date'>
              <p>{agenda.day}</p>
              <p>{agenda.month}</p>
              <p>{agenda.year}</p>
            </div>  
          
            <div className='agenda-event-infos'>
              <div className='agenda-event-name'>
                <p>{agenda.event}</p>
                <p>{agenda.eventName}</p>
              </div>
            
              <p className='agenda-event-info'>{agenda.info}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
