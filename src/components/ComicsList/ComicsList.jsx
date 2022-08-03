import React, { useEffect, useState } from "react";
import Comic from "./Comic";

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDataComics() {
      const res = await fetch(
        "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=5a429d27b33b99f04ef83ad022eb83c6&hash=f3f30fdef9a2929d67ffbbeb5528db7b"
      );
      const data = await res.json();
      setIsLoading(false);
      setComics(data.data.results);
    }
    getDataComics();
  }, []);

  console.log(comics);

  return (
    <div>{isLoading ? <div>Cargando...</div> : <Comic comics={comics} />}</div>
  );
};

export default ComicsList;

// 11f3df16753602c9b9c1a810f68c7863eaea512a55a429d27b33b99f04ef83ad022eb83c6
