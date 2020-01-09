import React from 'react';
import { Route } from 'react-router-dom';
import Routes from './routes/Routes';
import './App.css';
import Strain from './components/strain/Strains';
import SaveStrainsList from './components/recommendations/SaveStrainsList';
import SymptomsList from './components/Symptoms/SymptomsList';

import { SymContainer } from './SymptomStyle'

function App() {

  return (
    <SymContainer>
      <Route path = '/strain' component = {Strain} />
      <Route path = '/SaveStrainsList' component = {SaveStrainsList} />
      <Route path = '/SymptomsList' component = {SymptomsList} />
      <Routes />
    </SymContainer>
  );
};

export default App;