import React from 'react'

class Vagas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            vaga: {
                nome: '',
                nivel: 0,
                salario: 0,
                cargaHs: 0,
                descricao: ''
            }
        }
    }

    handleGetTudo = (e) =>{
        e.preventDefault()

        let vaga = this.state.vaga

        vaga[e.target.id] = e.target.value

        if(e.target.id == "salario"){ vaga[e.target.id] = this.handleSalario(e) }
        
        this.setState({
            vaga: vaga
        })

        console.log(this.state.vaga)
    }

    handleSalario(e){
        let salario = parseFloat(e.target.value.replace(',','.'))

        return salario
    }

    render(){
        return(
            <>

                <h1>
                    Vagas
                </h1>

                <hr></hr>
                <form>

                    <label>Nome:</label>
                    <input type="text" id="nome" className="input" placeholder="Informe nome da vaga" onChange={this.handleGetTudo}/>

                    <label>Nível:</label>
                    <select className="nivel" id="nivel" onChange={this.handleGetTudo}>
                        <option></option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>

                    <label>Salário:</label>
                    <input type="number" id="salario" step="0.01" className="input" placeholder="Informe o salário para a vaga" onChange={this.handleGetTudo} />

                    <label>Carga horária:</label>
                    <input type="time" id="cargaHs" className="input" placeholder="Informe o salário para a vaga" onChange={this.handleGetTudo}/>

                    <label>Descrição:</label>
                    <input type="text" id="descricao" className="input" placeholder="Informe nome da vaga" onChange={this.handleGetTudo}/>

                    <button className="btn">Enviar</button>
                </form>

                <a href="/home" ><button className="btn2">Voltar</button></a>
            </>
        )
    }
}

export default Vagas