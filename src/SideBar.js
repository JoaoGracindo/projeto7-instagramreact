import Sugestoes from "./Sugestoes";
import Usuario from './Usuario';


let usuario = {
    user:"catanacomics",
    nome:'Catana',
    img:"/img/catanacomics.svg"
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