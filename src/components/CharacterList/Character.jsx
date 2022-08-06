import React from "react";

const Character = ({ heroes }) => {
  return (
    <div className="flex flex-wrap">
      {heroes.map((heroe) => (
        <div key={heroe.id} className="flex flex-col items-center justify-center">
          <h1 className="text-white text-xl">{heroe.name}</h1>
          <img
            className="w-72 rounded-3xl"
            src={heroe.thumbnail.path + "." + heroe.thumbnail.extension}
            alt={heroe.name}
          />
          {heroe.description ? (
            <p className="text-white text-lg">{heroe.description}</p>
          ) : (
            <p className="text-gray-400 text-lg">
              No hay descripcion disponible para este personaje
            </p>
          )}
          <div className="text-white text-lg">
            <p>{heroe.comics.available} comics</p>
            <p>{heroe.events.available} eventos</p>
            <p>{heroe.stories.available} historias</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Character;
