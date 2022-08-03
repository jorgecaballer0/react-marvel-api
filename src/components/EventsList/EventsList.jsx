import React, { useEffect, useState } from "react";
import Event from "./Event";

const EventList = () => {
  const [event, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDataEvents() {
      const res = await fetch(
        "https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=5a429d27b33b99f04ef83ad022eb83c6&hash=f3f30fdef9a2929d67ffbbeb5528db7b"
      );
      const data = await res.json();
      setIsLoading(false);
      setEvents(data.data.results);
    }
    getDataEvents();
  }, []);

  console.log(event);

  return (
    <div>{isLoading ? <div>Cargando...</div> : <Event event={event} />}</div>
  );
};

export default EventList;

// 11f3df16753602c9b9c1a810f68c7863eaea512a55a429d27b33b99f04ef83ad022eb83c6
