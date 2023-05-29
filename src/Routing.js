import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Individuals from './components/Individuals';
import Team from './components/Team';
import Enterprise from './components/Enterprise';

const Routing = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/team" element={<Team />} />
        <Route path="/enterprise" element={<Enterprise />} />
      </Routes>
  )
}

export default Routing