export default function ExercicioPage() {
    const numero = [];

    for (let i = 1; i <= 10; i++) {
        numero.push(<span key={i}>{i}</span>)
    }

    return (
        <>
            <h1>Lista de números</h1>
            
            {numero}
        </>
    )
}