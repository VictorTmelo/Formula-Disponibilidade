import { graphConfig } from "./graphConfig.js"

const botaoRodar = document.querySelector("#rodar")

botaoRodar.addEventListener("click", (event) => {

    const n = document.querySelector("#valorN").value
    
    const p = document.querySelector("#valorP").value

    const k1 = 1
    const k2 = n / 2
    const k3 = n

    const grafico1 = graph1(n,k1,p)
    const grafico2 = graph1(n,k2,p)
    const grafico3 = graph1(n,k3,p)

    graphConfig(grafico1, grafico2, grafico3)
    
})

function graph1(n, k, p){

    const array = []

    for (let i = 1; i <= n; i++){

        array.push([i, disponibilidade(i,k,p)])

    }
    console.log(array)
    return array
}



