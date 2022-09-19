export default function Sugestao (props){
    return(
        <div className="sugestao">

            <div className="usuario">
                <img src={props.img} />
                <div className="texto">
                    <div>{props.usuario}</div>
                    <div>{props.texto}</div>
                </div>

            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}