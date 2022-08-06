import React from "react";
import Cards from "../Cards/Cards";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-bgPrimary text-4xl text-white flex flex-col items-center justify-center">
        <h3 className="text-center">Seleccione una categoria para continuar</h3>
        <Cards />
      </div>
    </>
  );
};

export default Home;
