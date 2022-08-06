import React from "react";
import IMG1 from "../../assets/img/character.jpg";
import IMG2 from "../../assets/img/comics.jpg";
import IMG3 from "../../assets/img/eventos.jpg";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <section className="flex  justify-center items-center gap-4 mx-6 p-4">
      <div className="w-1/3 hover:-translate-x-2 transition-all">
        <Link to="/personajes">
          <img src={IMG1} alt="personajes" className="rounded-l-full"/>
        </Link>
      </div>
      <div className="w-1/3 hover:scale-95 transition-all">
        <Link to="comics">
          <img src={IMG2} alt="comics" className="rounded"/>
        </Link>
      </div>
      <div className="w-1/3 hover:translate-x-2 transition-all">
        <Link to="eventos">
          <img src={IMG3} alt="eventos" className="rounded-r-full"/>
        </Link>
      </div>
    </section>
  );
};

export default Cards;
