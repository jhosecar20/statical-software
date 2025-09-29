import '../assets/DataInput.css';
import { useState } from 'react';


function DataInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');


  const handleSubmit = () => {
    const numbers = inputValue.split(',').map(n => Number(n.trim())).filter(n => !isNaN(n)).sort((a, b) => a - b);
    
    if (numbers.length === 0) {
      alert('Por favor, ingresa números válidos separados por comas.');
      return;
    }
    onSubmit(numbers);
    
    setInputValue('');
    
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <input
        type="text"
        placeholder="ej: 10,20,30,40"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button >Agregar</button>
      
    </form>
  );
}

export default DataInput;
