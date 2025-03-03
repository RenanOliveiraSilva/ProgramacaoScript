import Line1 from "./Line1"
import Line2 from "./Line2"



export default function Board() {

    return (
        <>
            <Line1 team="1"/>
            <Line2 team="1"/>
            <Line1 team="1"/>
            <Line2 isEmpty={true}/>
            <Line1 isEmpty={true}/>
            <Line2 team="2"/>
            <Line1 team="2"/>
            <Line2 team="2"/>
        </>

    )
}