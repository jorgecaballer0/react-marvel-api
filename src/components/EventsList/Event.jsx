import React from "react";

const Event = ({ event }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 items-center justify-center mx-auto my-4">
      {event.map((event) => (
        <div key={event.id} className="flex flex-col items-center p-2">
          <h1 className="text-white text-3xl">{event.title}</h1>
          <a
            href={event.urls[0].url.replace("http", "https")}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="w-96 h-80 hover:scale-95 transition-all duration-300 rounded-lg hover:rounded-3xl"
              src={event.thumbnail.path + "." + event.thumbnail.extension}
              alt={event.title}
            />
          </a>
          <ul className="text-white text-lg text-center px-32">
            {event.description ? (
              <li>{event.description}</li>
            ) : (
              <li>No hay descripción disponible para este evento</li>
            )}
            <li>{event.characters.available} personajes</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Event;
