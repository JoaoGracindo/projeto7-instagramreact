import React from 'react';

export default function Usuario(props){
    const [nome, setNome] = React.useState(props.nome);
    const [img, setImg] = React.useState(props.img);


    return(
        <div className="usuario">
            <img onClick={() => setImg(prompt('Insira a nova url'))} src={img ? img : props.img}/>
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