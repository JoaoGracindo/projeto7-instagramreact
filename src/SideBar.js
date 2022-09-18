import Sugestoes from "./Sugestoes";


let usuario = {
    user:"catanacomics",
    nome:'Catana',
    img:"/img/catanacomics.svg"
}

function Usuario(props){
    return(
        <div className="usuario">
            <img src={props.img}/>
            <div className="texto">
                <strong>{props.user}</strong>
                {props.nome}
            </div>

        </div>
    )
}

export default function SideBar(){
    return(
        <div className="sidebar">
            <Usuario img={usuario.img} user={usuario.user} nome={usuario.nome}/>
            <Sugestoes/>
            
        </div>
    )
}