export default function Divisao(props) {
    const resultado = props.a / props.b;

    return (
        <div>
            <h1>Divisão</h1>
            <p>A divisão de {props.a} / {props.b} é igual a {resultado}</p>
        </div>
    )
}