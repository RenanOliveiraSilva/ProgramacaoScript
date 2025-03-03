import style from '../style/game.module.css'

export default function Piece(props){
        return(
        <button className={props.team == 1 ? style.teamOnePiece : style.teamTwoPiece}>
            
        </button>
    )
}