import { useState } from "react";

import { SectionContent } from "components/SectionContent";
import events from "constants/events";

import styles from "./Events.module.sass";


const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  return (
    <section>
      <SectionContent className={styles.content}>

        <h1>Мероприятия</h1>

        <div className={styles.grid}>

          <img
            className={styles.image}
            src={`events/${selectedEvent.image}`}
          />

          <div className={styles.plates}>
            {
              events.map(event => {
                return (
                  <img
                    key={event.id}
                    className={styles.plate}
                    src={`events/${event.image}`}
                    onClick={() => setSelectedEvent(event)}
                  />
                )
              })
            }
          </div>

          <div className={styles.info}>
            <h2>Описание</h2>
            <p>{selectedEvent.about}</p>
          </div>

        </div>

      </SectionContent>
    </section>
  );
};


export default Events;
