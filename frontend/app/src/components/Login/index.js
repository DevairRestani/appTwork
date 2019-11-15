import React, {useState} from 'react'

import '../../css/login.css'

function Login ({history}){
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')

    function handleSubmit (event){
        event.preventDefault()
    
        let storage = window.localStorage
        
        // let log = JSON.parse(storage.getItem('usuario'))
        // let test = <Service/>
        test.get('babalu')
        
        let i = 0
        
        // console.log(log)
    }

    function handleSignup(){
        history.push('/signup')
    }
        
        return(  
            <>
                <h1> Realizar login </h1>
                <hr></hr>

                <form onSubmit={handleSubmit}>
                    
                    <label htmlFor="email"> Email: </label>
                    <input type="email" className="input" placeholder="Digite o seu e-mail" value={email} onChange={event => setEmail(event.target.value)}/>
                    
                    <label> Senha: </label>
                    <input type="password" className="input" placeholder="Informe sua senha" value={password} onChange={event => setPass(event.target.value)}/>
                    
                    <button className="btn">Enviar</button>
                    <p> Não possui uma conta? <button className="btn2" onClick={handleSignup}> Cadastre-se </button> </p>

                </form>

                {/* <Service/> */}
            </>    
        )
}

export default Login