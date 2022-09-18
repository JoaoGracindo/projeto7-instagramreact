import Sugestoes from "./Sugestoes";
import React from 'react';


let usuario = {
    user:"catanacomics",
    nome:'Catana',
    img:"/img/catanacomics.svg"
}

function Usuario(props){
    const [nome, setNome] = React.useState(props.nome);
    const [img, setImg] = React.useState(props.img);


    return(
        <div className="usuario">
            <img onClick={() => setImg(prompt('Insira a novaurl'))} src={img}/>
            <div className="texto">
                <strong>{props.user}</strong>
                <span>
                    {nome}
                    <ion-icon onClick={() => setNome(prompt('Insira novo nome'))} name="pencil"></ion-icon>
                </span>
               
            </div>

        </div>
    )
}

export default function SideBar(){
    return(
        <div className="sidebar">
            <Usuario img={usuario.img} user={usuario.user} nome={usuario.nome}/>
            <Sugestoes/>
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
             </div>
        </div>
    )
}