import '../assets/CountRepetitions.css';
function CountRepetitions({ data }) {
    if (!data || data.length === 0) {
        return <p>No hay datos disponibles para mostrar repeticiones.</p>;
    }

    const repetitions = data.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className='count-repetitions'>
            <h2>Repeticiones de Valores</h2>
            {Object.entries(repetitions).map(([value, count]) => (
                <p key={value}>
                    Valor: <strong>{value}</strong>, Repeticiones: <strong>{count}</strong> 
                </p>
            ))}
        </div>
    );
}

export default CountRepetitions;

