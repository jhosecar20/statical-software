import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);   

function ChartDisplay({ data }) {
    if (!data || data.length === 0) {
      return <p>No hay datos disponibles para mostrar.</p>;
    }
  const chartData = {
    labels: data.map((_, i) => `Dato ${i + 1}`),
    datasets: [
      {
        label: 'Valores',
        data: data,
        backgroundColor: '#4f46e5',
      },
    ],
  };
  return (
    <div>
        <h3>Gráfico de Datos</h3>
        <Bar data={chartData} />        
    </div>
  );
}

export default ChartDisplay;