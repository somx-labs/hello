import React from 'react';
import './App.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Stable from '../components/stable/stable';

// import { Table } from '@blueprintjs/table';

function App() {
  return (
    <div className="App">
      <Header />
      <Stable />
      <Footer />
    </div>
  );
}

export default App;
