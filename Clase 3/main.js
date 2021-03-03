const listado = document.getElementById("lista")
const formulario = document.getElementById("formulario")
let objetos = []

const render = function (event){
    for (let index = 0; index < objetos.length; index++){
        const item = document.createElement("li")
        item.innerHTML = objetos[index]
        listado.append(item)
    }
}


const accion = function (event){
    event.preventDefault()
    objetos.shift(event.target.entrada.value)
    objetos.unshift(event.target.entrada.value)
    render()
    

    
}

formulario.addEventListener("submit", accion)