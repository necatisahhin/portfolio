import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Portfolio />
      </div>
    </HelmetProvider>
  );
}

export default App;
