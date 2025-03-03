export default function Subtracao(props) {
    const resultado = props.a - props.b;

    return (
        <div>
            <h1>Subtração</h1>
            <p>A subtração de {props.a} - {props.b} é igual a {resultado}</p>
        </div>
    )
}