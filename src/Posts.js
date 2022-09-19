import Post from './Post';

let posts = [
    {
        imgUsuario:'/img/meowed.svg',
        usuario:'meowed',
        curtidoPorImg:'/img/respondeai.svg',
        curtidoPor:'respondeai',
        imgPost:'/img/gato-telefone.svg',
        numeroCurtidas:11523
    },
    {
        imgUsuario:'/img/barked.svg',
        usuario:'barked',
        curtidoPorImg:'/img/adorable_animals.svg',
        curtidoPor:'adorable-animals',
        imgPost:'/img/dog.svg',
        numeroCurtidas:200541
    }
]



export default function Posts(){
    return(
        <div className="posts">
            {posts.map(p => <Post imgUsuario={p.imgUsuario} imgPost={p.imgPost} curtidoPor={p.curtidoPor} curtidoPorImg={p.curtidoPorImg} usuario={p.usuario} numeroCurtidas={p.numeroCurtidas}/>)}
        </div>
    )
}