import React from "react";

const Event = ({ event }) => {
  return (
    <div>
      {event.map((event) => (
        <div key={event.id}>
          <h1>{event.title}</h1>
          <img
            src={event.thumbnail.path + "." + event.thumbnail.extension}
            alt={event.title}
          />
          {event.description ? (
            <p>{event.description}</p>
          ) : (
            "No hay descripción disponible para este evento"
          )}
          <p>{event.characters.available} personajes</p>
          <p>{event.comics.available} comics</p>
        </div>
      ))}
    </div>
  );
};

export default Event;
