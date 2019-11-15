import React from 'react'

class Service extends React.Component{
    get(url){
        let x = url.split(/\//g)
        let valor = JSON.parse(window.localStorage.getItem(x[x.length -1]))
        console.log('passeo')
        return valor
    }

    post(url, obj){

        let valor = window.localStorage.setItem('trator', JSON.stringify(obj))
    }
    render(){
        return(<></>)
    }

}

export default Service
