import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './components/Login/index'
import Signup from './components/Signup/index'
import Pergunta from './components/Pergunta/index'
import Perfil from './components/Perfil/index'
import Vagas from './components/Vagas/index'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/pergunta" component={Pergunta}/>
                <Route path="/perfil" component={Perfil} />
                <Route path="/vagas" component={Vagas}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes