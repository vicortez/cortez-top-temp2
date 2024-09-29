import React, { useRef, useState } from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-neutral-900	 w-full h-full h-screen p-6 m2 text-white">
      <h1 className="w-full text-center text-xl font-bold ">Cortez</h1>
      <h3 className="text-xl mb-3">Checkout my apps</h3>
      <span>List of apps coming soon™.</span>
      <br />
      <span>Meanwhile, checkout this one secret santa app:</span>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://amigosecretofacil.cortez.top"
        className="pl-4 text-cyan-200"
      >
        amigosecretofacil.cortez.top
      </a>
    </div>
  );
};

export default HomePage;
