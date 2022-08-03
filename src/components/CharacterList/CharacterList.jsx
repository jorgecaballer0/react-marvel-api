import React, { useEffect, useState } from "react";
import Character from "./Character";

const CharacterList = () => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDataCharacters() {
      const res = await fetch(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=5a429d27b33b99f04ef83ad022eb83c6&hash=f3f30fdef9a2929d67ffbbeb5528db7b"
      );
      const data = await res.json();
      setIsLoading(false);
      setHeroes(data.data.results);
    }
    getDataCharacters();
  }, []);

  console.log(heroes);

  return (
    <>{isLoading ? <div>Cargando...</div> : <Character heroes={heroes} />}</>
  );
};

export default CharacterList;
