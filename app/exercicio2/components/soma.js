export default function Soma(props) {
    const resultado = props.a + props.b;

    return (
        <div>
            <h1>Soma</h1>
            <p>A soma de {props.a} + {props.b} é igual a {resultado}</p>
        </div>
    )
}