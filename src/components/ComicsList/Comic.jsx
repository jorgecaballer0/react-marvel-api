import React from "react";

const Comic = ({ comics }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 items-center justify-center mx-auto my-4">
      {comics.map((comic) => (
        <div key={comic.id} className="flex flex-col items-center p-2">
          <h1 className="text-white text-3xl"> {comic.title}</h1>
          <a
            href={comic.urls[0].url.replace("http", "https")}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="w-72 h-72 hover:scale-95 transition-all duration-300 rounded-lg hover:rounded-3xl"
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt={comic.title}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Comic;
