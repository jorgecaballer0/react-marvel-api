import React from "react";

const Comic = ({ comics }) => {
  return (
    <div>
      {comics.map((comic) => (
        <div key={comic.id}>
          <h1>{comic.title}</h1>
          <img
            src={comic.thumbnail.path + "." + comic.thumbnail.extension}
            alt={comic.title}
          />
          {comic.description ? (
            <p>{comic.description}</p>
          ) : (
            "No hay descripción disponible para este comic"
          )}
          <p>{comic.pageCount} páginas</p>
        </div>
      ))}
    </div>
  );
};

export default Comic;
