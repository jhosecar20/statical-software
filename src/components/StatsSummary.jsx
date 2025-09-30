import '../assets/StatsSummary.css';
import { calcularMaximo,calcularMedia,calcularMinimo,calcularNumeroIntervalos,calcularRango, } from './StatsUtil'; 
 
function StatsSummary({ data }) {
    if (!data || data.length === 0 || data.every(n => n === 0)) {
        return <p>No hay datos disponibles para mostrar estadísticas.</p>;
    }
    
    const media = calcularMedia(data);
    const lsup = calcularMaximo(data);
    const linf = calcularMinimo(data);
    const rango = calcularRango(data);
    const numeroDatos = data.length;
    const numeroIntervalos = calcularNumeroIntervalos(data);

    return (
        <div className='stats-summary'>
            <h2>Resumen de Estadísticas</h2>
            <p>Número de Intervalos : {numeroIntervalos}</p>
            <p>Número de Datos: {numeroDatos}</p>
            <p>Media: {media.toFixed(2)}</p>
            <p>Valor Máximo: {lsup}</p>
            <p>Valor Mínimo: {linf}</p>
            <p>Rango: {rango}</p>
            
            {/* Aquí puedes agregar más estadísticas como mediana, moda, desviación estándar, etc. */}
        </div>
    );
}

export default StatsSummary;