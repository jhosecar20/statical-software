import '../assets/StatsSummary.css';
function StatsSummary({ data }) {
    if (!data || data.length === 0 || data.every(n => n === 0)) {
        return <p>No hay datos disponibles para mostrar estadísticas.</p>;
    }
    const media = data.reduce((a, b) => a + b) / data.length;
    console.log("Media calculada:", media);
    console.log("Tipo:", typeof media);

    return (
        <div className='stats-summary'>
            <h2>Resumen de Estadísticas</h2>
            <p>Media: {media.toFixed(2)}</p>
            
            {/* Aquí puedes agregar más estadísticas como mediana, moda, desviación estándar, etc. */}
        </div>
    );
}

export default StatsSummary;