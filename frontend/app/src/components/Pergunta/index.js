import React from 'react'

class Perguntas extends React.Component{
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

    handleCreateAsk = (e) =>{
        e.preventDefault()
        
        let pergunta = this.state.perguntas
        
        pergunta[0].enunciado = 'Tchau'

        let array = []

        array = pergunta.map(x => {
            x.enunciado = 'eae';
            return x;
        })

        // pergunta.forEach(x => {
        //     x.enunciado = 'eae'
        //     array.push(x)
        // })
        
        
        
        array.push({
            id : array.length + 1,
            enunciado : '',
            respostas : []              
        })

        console.log(array)

        this.setState({
            perguntas : array
        })
        

        console.log(this.state.perguntas)
    
    }

    render(){
        return(
            <>
                <p>{this.state.perguntas[0].enunciado}</p>
                <button onClick={this.handleCreateAsk}>Criar pergunta</button>
            </>
        )
    }
}


export default Perguntas