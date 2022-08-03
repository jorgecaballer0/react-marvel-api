import React from "react";

const Character = ({ heroes }) => {
  return (
    <div>
      {heroes.map((heroe) => (
        <div key={heroe.id}>
          <h1>{heroe.name}</h1>
          <img
            src={heroe.thumbnail.path + "." + heroe.thumbnail.extension}
            alt={heroe.name}
          />
          {heroe.description ? (
            <p>{heroe.description}</p>
          ) : (
            "No hay descripción disponible para este personaje"
          )}
          <p>{heroe.comics.available} comics</p>
          <p>{heroe.events.available} events</p>
          <p>{heroe.series.available} series</p>
          <p>{heroe.stories.available} stories</p>
        </div>
      ))}
    </div>
  );
};

export default Character;
