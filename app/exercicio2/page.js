import Divisao from "./components/divisao";
import Multiplicacao from "./components/multiplicacao";
import Soma from "./components/soma";
import Subtracao from "./components/subtracao";

export default function ExercicioPage() {
    return (
        <div>
        <h1>Exercício 2</h1>
        <p> Calculadora</p>

        <h2>Resultados</h2>
        <Soma a={10} b={5} />
        <Subtracao a={10} b={5} />
        <Multiplicacao a={10} b={5} />
        <Divisao a={10} b={5} />

        </div>
    );
}