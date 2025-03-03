export default function Multiplicacao(props) {
    const resultado = props.a * props.b;

    return (
        <div>
            <h1>Multiplicação</h1>
            <p>A multiplicação de {props.a} * {props.b} é igual a {resultado}</p>
        </div>
    )
}