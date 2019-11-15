import React from 'react'
import './style.css'

class Perfil extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                perguntas : [{
                    id : 1 ,
                    enunciado : 'Olá',
                    respostas : [{
                        id : '',
                        descricao : ''
                    }]              
                }]
        }
    
    }

    render(){
        return(
            <div class="perfilMain">
                <img src={require('../../assets/ImagensPerfil/fotoperfil.jpg')} alt="Imagem de Perfil" />
                <span className="nomePerfil">Kurosaki Ichigo</span>
                <div className="areas">
                    <span className="areaAtuacaoTitulo">Area de Atuação</span>
                    <span className="areasDescricao">Desenvolvedor</span>
                </div>

                <div className="areas">
                    <span className="areaAtuacaoTitulo">Area de Atuação</span>
                    <div className="areasDescricao">
                        <span className="areaAtuacaoLinha">Email: teste@teste.com</span>
                        <span className="areaAtuacaoLinha">Telefone: (xx) xxxxx-xxxx</span>
                        <span className="areaAtuacaoLinha">Cidade: Taquaritinga</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Perfil