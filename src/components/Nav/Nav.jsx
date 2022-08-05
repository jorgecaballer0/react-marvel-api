import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/marvel-logo.jpg";

const Nav = () => {
  return (
    <>
      <nav className="bg-marvelRed flex justify-between p-1 ">
        <Link to="/">
          <img className="w-36" src={Logo} alt="Logo" />
        </Link>
        <ul className="flex items-center gap-6 mr-6 text-2xl text-white">
          <li className="hover:text-gray-400 transition-all">
            <Link to="/personajes">Personajes</Link>
          </li>
          <li className="hover:text-gray-400 transition-all">
            <Link to="/comics">Comics</Link>
          </li>
          <li className="hover:text-gray-400 transition-all">
            <Link to="/eventos">Eventos</Link>
          </li>
        </ul>
      </nav>
      <div className="bg-bgSecondary text-white text-sm text-center py-1">
        <p className="mb-1">
          Este proyecto utiliza la API de Marvel para obtener informacion de los
          personajes, comics y eventos
        </p>
        <p className="mb-1">
          Sitio oficial:
          <a
            className="hover:text-gray-400 transition-all ml-1"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.marvel.com/"
          >
            MARVEL
          </a>
        </p>
      </div>
    </>
  );
};

export default Nav;
