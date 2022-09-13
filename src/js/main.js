import { graphConfig } from "./graphConfig.js"
import { disponibilidade } from "./formula.js"

const botaoRodar = document.querySelector("#rodar")

botaoRodar.addEventListener("click", (event) => {

    const n = document.querySelector("#valorN").value

    const k1 = 1
    const k2 = n / 2
    const k3 = n

    const grafico1 = graph1(n, k1)
    const grafico2 = graph2(n, k2)
    const grafico3 = graph3(n, k3)

    graphConfig(grafico1, grafico2, grafico3)

})

function graph1(n, k) {

    const array = []


    for (let j = 0.1; j <= 1; j = j + 0.1) {
        array.push(disponibilidade(n, 1, j))
    }

    console.log(array)
    return array
}


function graph2(n, k) {

    const array = []


    for (let j = 0.1; j <= 1; j = j + 0.1) {
        array.push(disponibilidade(n, (Math.floor(n / 2) + 1), j))
    }


    return array
}

function graph3(n, k) {

    const array = []


    for (let j = 0.1; j <= 1; j = j + 0.1) {
        array.push(disponibilidade(n, n, j))
    }


    return array
}


