import Sugestao from './Sugestao';


let paginas = [
    {
        usuario:"bad vibe memes",
        img:"/img/bad.vibes.memes.svg",
        texto:'Segue Você'
    },
    {
        usuario:"chibirdart",
        img:"/img/chibirdart.svg",
        texto:'Segue Você'
    },
    {
        usuario:"razoesparaacreditar",
        img:"/img/razoesparaacreditar.svg",
        texto:'Novo no Instagram'
    },
    {
        usuario:"adorable_animals",
        img:"/img/adorable_animals.svg",
        texto:'Segue Você'
    },
    {
        usuario:"smallcutecats",
        img:"/img/smallcutecats.svg",
        texto:'Segue Você'
    }
]




export default function Sugestoes(){
    return(
        <div className="sugestoes">
            <div className="titulo">
                <div>Sugestoẽs para você</div>
                <div>Ver tudo</div>
            </div>
            {paginas.map(p => <Sugestao img={p.img} usuario={p.usuario} texto={p.texto}/>)}
        </div>
    )
}