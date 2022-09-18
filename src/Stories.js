

let paginas = [
    {
        nome: "9gag",
        imagem: "/img/9gag.svg"
    },
    {
        nome: "meowed",
        imagem: "/img/meowed.svg"
    },
    {
        nome: "barked",
        imagem: "/img/barked.svg"
    },
    {
        nome: "nathanwpylestrangeplanet",
        imagem: "/img/nathanwpylestrangeplanet.svg"
    },
    {
        nome: "wawawicomics",
        imagem: "/img/wawawicomics.svg"
    },
    {
        nome: "respondeai",
        imagem: "/img/respondeai.svg"
    },    {
        nome: "filomoderna",
        imagem: "/img/filomoderna.svg"
    },    {
        nome: "memeriagourmet",
        imagem: "/img/memeriagourmet.svg"
    }
];


function Story (props){
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.img} />
            </div>
            <div className="usuario">
                {props.nome}
            </div>
        </div>
    )
}

export default function Stories(){
    return(
        <div className="stories">
            {paginas.map((p) => <Story img={p.imagem} nome={p.nome} />)}
            <ion-icon className="setinha" name="chevron-forward-circle-outline"></ion-icon>
        </div>
    )
}