import React, { useEffect, useState } from "react";
import Serie from "./Serie";

const SeriesList = () => {
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDataSeries() {
      const res = await fetch(
        "https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=5a429d27b33b99f04ef83ad022eb83c6&hash=f3f30fdef9a2929d67ffbbeb5528db7b"
      );
      const data = await res.json();
      setIsLoading(false);
      setSeries(data.data.results);
    }
    getDataSeries();
  }, []);

  console.log(series);

  return <>{isLoading ? <div>Cargando...</div> : <Serie series={series} />}</>;
};

export default SeriesList;
