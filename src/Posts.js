let posts = [
    {
        imgUsuario:'/img/meowed.svg',
        usuario:'meowed',
        curtidoPorImg:'/img/respondeai.svg',
        curtidoPor:'respondeai',
        imgPost:'/img/gato-telefone.svg'
    },
    {
        imgUsuario:'/img/barked.svg',
        usuario:'barked',
        curtidoPorImg:'/img/adorable_animals.svg',
        curtidoPor:'adorable-animals',
        imgPost:'/img/dog.svg'
    }
]


function Post(props){
    return(
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imgUsuario}/>
            {props.usuario}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.imgPost} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.curtidoPorImg} />
            <div class="texto">
              Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}


export default function Posts(){
    return(
        <div className="posts">
            {posts.map(p => <Post imgUsuario={p.imgUsuario} imgPost={p.imgPost} curtidoPor={p.curtidoPor} curtidoPorImg={p.curtidoPorImg} usuario={p.usuario}/>)}
        </div>
    )
}