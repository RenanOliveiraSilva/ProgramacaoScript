import Board from "./components/Board"

export default function page() {

    return (
        <div style={{
            "display":"flex",
            "alignItems":"center",
            "justifyContent":"center",
            "padding": 10,
            "backgroundColor":"purple",
            "flexDirection":"column"
        }} >
            
                Trabalho de React
                <Board/>
        </div>
    )
}