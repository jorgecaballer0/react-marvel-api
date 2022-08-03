import React from "react";

const Serie = ({ series }) => {
  return (
    <div>
      {series.map((serie) => (
        <div key={serie.id}>
          <h1>{serie.title}</h1>
          <img
            src={serie.thumbnail.path + "." + serie.thumbnail.extension}
            alt={serie.title}
          />
          {serie.description ? (
            <p>{serie.description}</p>
          ) : (
            "No hay descripción disponible para esta serie"
          )}
          {serie.startYear ? (
            <p>{serie.startYear}</p>
          ) : (
            " No hay año de inicio disponible para esta serie"
          )}
          {serie.endYear ? (
            <p>{serie.endYear}</p>
          ) : (
            " No hay año de fin disponible para esta serie"
          )}
        </div>
      ))}
    </div>
  );
};

export default Serie;
