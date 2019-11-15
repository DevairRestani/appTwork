import React from 'react'

import '../../css/login.css';

//import Voltar from '../Voltar/index'

class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            usuario: {
                nome : '',
                email : '',
                senha: '',
                cpf: '',
                telefone: '',
                cidade: '',
                estado: '',
                tipo: ''
            },
            validateErrors : []
        }
    }

    redirectToHome = () => {
        const { history } = this.props;
        if(history) history.push('/');
       }

    handlerInputChange = (e) =>{
        let usuario = this.state.usuario

        usuario[e.target.id] = e.target.value

        this.setState({
            usuario : usuario
        })
    }

    handlerTipoUser = (e) =>{
        let tipo = this.state.usuario
        
        tipo.tipo = e.target.value
        
        this.setState({
            tipo : tipo
        })
    }

    handlerEstado = (e) =>{
        let estado = this.state.usuario
        
        estado.estado = e.target.value
        this.setState({
            estado: estado
        })
    }

    validateNome(nome){
        return nome.length !== 0 && nome.length <=100
    }

    validateEmail(email){
        let re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        return re.test(email)
    }

    validate(usuarioState){
        let errors = []
        if (!this.validateNome(usuarioState.nome)) {errors.push('Nome inválido!')}
        if (!this.validateEmail(usuarioState.email)) {errors.push('Email inválido')}

        return errors
    }

    resetUsuarioState(usuarioState){
        usuarioState.nome = ''
        usuarioState.email = ''
        this.setState(
            {usuario: usuarioState}
        )
    }

    handleSubmit = (event) =>{
        event.preventDefault()

        let usuarioState = this.state.usuario

        let errors = this.validate(usuarioState)

        this.setState({
            validateErrors: errors
        })

        if(errors.length === 0){
            let usuarioState = this.state.usuario

            let storage = window.localStorage
            
            let listaUsuarios = JSON.parse(storage.getItem('usuario')) || []

            listaUsuarios.push(usuarioState) 

            storage.setItem('usuario', JSON.stringify(listaUsuarios))
        
            this.resetUsuarioState(usuarioState)
        }
    }

    render(){
        let errors = this.state.validateErrors

        return(
            <>
                {errors.map((error, index) =>(
                    <p key={index}>{error}</p>
                ))}

                <h1> Realizar cadastro </h1>
                <hr></hr>

                <form className="formOption">
                    <p>O que você é?</p>
                    <select onClick={this.handlerTipoUser}>
                        <option value="vazio"></option>
                        <option value="profissional">Profissional</option> 
                        <option value="empresa">Empresa</option>    
                    </select>                  
                </form>

                <form onSubmit={this.handleSubmit}>

                    <label> Nome: * </label>
                    <input type="name" id="nome" className="input" placeholder="Informe o seu nome" onChange={this.handlerInputChange} value={this.state.usuario.nome}/>

                    <label> Email: * </label>
                    <input type="email" id="email" className="input" placeholder="Informe um e-mail" onChange={this.handlerInputChange} value={this.state.usuario.email}/>

                    <label> Senha: * </label>
                    <input type="password" id="senha" className="input" placeholder="Informe uma senha" onChange={this.handlerInputChange}/>

                    <label> CPF: * </label>
                    <input type="text" id="cpf" className="input" placeholder="Informe seu cpf" onChange={this.handlerInputChange}/>

                    <label> Telefone: * </label>
                    <input type="tel" id="telefone" className="input" placeholder="Informe seu nº de telefone" onChange={this.handlerInputChange}/>

                    <div>
                        <section>
                            <label className="labelCity"> Cidade: * </label>
                            <input type="text" id="cidade" className="inputCity" placeholder="Informe sua cidade" onChange={this.handlerInputChange}/>
                        </section>
                            
                        <section>
                            <label className="labelEstado"> Estado: * </label>
                            <select className="inputEstado" onClick={this.handlerEstado}>
                                <option value=""></option>
                                <option value="sp">SP</option>
                                <option value="rj">RJ</option>
                                <option value="pa">PA</option>                                
                            </select>

                        </section>
                    </div>
                    
                    <button className="btn">Enviar</button>

                </form>
            
                    <a  href="/" ><button className="btn2">Voltar</button></a>
                
            </> 
        )
    }
}

export default Signup