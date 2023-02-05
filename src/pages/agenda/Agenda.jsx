import React from 'react'
import AgendaObject from './AgendaObject'

export default function Agenda() {
  return (
    <main>
      <div>
        <p>Agenda</p>
        <p>Próximos eventos</p>
      </div>

      <section>
        {AgendaObject.map((agenda) => (
          <div>
            <div>
              <p>{agenda.day}</p>
              <p>{agenda.month}</p>
              <p>{agenda.year}</p>
            </div>  
          
            <div>
              <div>
                <p>{agenda.event}</p>
                <p>{agenda.eventName}</p>
              </div>
            
              <p>{agenda.info}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
