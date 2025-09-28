

import './App.css'
import Header from './components/Header.jsx';
import DataInput from './components/DataInput.jsx';
import Home from './components/Home.jsx';
import StatsSummary from './components/StatsSummary.jsx'
import ChartDisplay from './components/ChartDisplay.jsx';
import Footer from './components/footer.jsx';
import { useState } from 'react';



function App() {  
  const [data, setData] = useState([]); // Ejemplo de datos
  

  return (
    <div>
      <StatsSummary data={data} />

      <Header />
      <Home />
      <DataInput onSubmit={(newData) => setData(newData)} />
      <StatsSummary data={data} />
      <ChartDisplay data={data} />
      <Footer />
    </div>
  );
}

export default App;
