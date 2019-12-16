import React from 'react';
import './App.css';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Tabs from '../../components/tabs';

// import { Table } from '@blueprintjs/table';

function App() {
  return (
    <div className="App">
      <Header />
      <Tabs />
      <Footer />
    </div>
  );
}

export default App;
