import React from 'react'

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


function Post(props){

  const [curtido, setCurtido] = React.useState(false);
  const [numero, setNumero] = React.useState(props.numeroCurtidas);
  const [salvo, setSalvo] = React.useState(false)

  function curtir(){
    setCurtido(!curtido);
    if(!curtido){
      setNumero(numero + 1)
    }else{
      setNumero(numero - 1)
    }
  }
  
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

        <div class="conteudo" onClick={curtir}>
          <img src={props.imgPost} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              {curtido ? <ion-icon onClick={curtir} name="heart" color='red'></ion-icon> : <ion-icon onClick={curtir} name="heart-outline"></ion-icon>}
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              {salvo ? <ion-icon onClick={() => setSalvo(!salvo)} name="bookmark"></ion-icon> : <ion-icon onClick={() => setSalvo(!salvo)} name="bookmark-outline"></ion-icon>}
            </div>
          </div>

          <div class="curtidas">
            <img src={props.curtidoPorImg} />
            <div class="texto">
              Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras {numero} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}


export default function Posts(){
    return(
        <div className="posts">
            {posts.map(p => <Post imgUsuario={p.imgUsuario} imgPost={p.imgPost} curtidoPor={p.curtidoPor} curtidoPorImg={p.curtidoPorImg} usuario={p.usuario} numeroCurtidas={p.numeroCurtidas}/>)}
        </div>
    )
}