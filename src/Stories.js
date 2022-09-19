import Story from './Story';


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
    },
    {
        nome: "filomoderna",
        imagem: "/img/filomoderna.svg"
    },
    {
        nome: "memeriagourmet",
        imagem: "/img/memeriagourmet.svg"
    }
];


export default function Stories(){
    return(
        <div className="stories">
            {paginas.map((p) => <Story img={p.imagem} nome={p.nome} />)}
            <div class="setinha">
             <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}