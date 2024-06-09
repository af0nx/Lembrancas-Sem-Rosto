import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[800px] mx-auto text-center flex flex-col justify-center">
        <div className="text-white mt-96px h-screen flex flex-col justify-center">
          <div className="flex justify-center items-center">
          </div>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-cyan-600 ">
            Ao Presente e ao Futuro
          </h1>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Explorando o Presente e Moldando o Futuro da Tecnologia Juntos.
          </p>
          <button
            className="bg-[#097969] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
            onClick={() => (window.location.href = "/")}
          >
            Compre já
          </button>
        </div>
      </div>



 
    </div>
  );
};

export default Hero;
