export const graphConfig = (grafico1, grafico2, grafico3) => {

    const labels = montarLabels();

    const [dataGrafico1, dataGrafico2, dataGrafico3] = montarDataGraficos()

    const data = {
        labels: labels,
        datasets: [{
            label: 'K = 1',
            backgroundColor: 'rgb(58, 235, 52)',
            borderColor: 'rgb(58, 235, 52)',
            data: dataGrafico1
        },
        {
            label: 'K = N / 2',
            backgroundColor: 'rgb(235, 235, 52)',
            borderColor: 'rgb(235, 235, 52)',
            data: dataGrafico2
        },
        {
            label: 'K = N',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: dataGrafico3
        }]
    };
    
    const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                  title: {
                    display: true,
                    color: "black",
                    text: 'Disponibilidades'
                  }
                }, 
    
                x:  {
                    title: {
                      display: true,
                      color: "black",
                      text: 'P'
                    }
                }
            }
        }
    };

    function montarLabels(){

        const labels = []

        for(let i = 0.1; i <= 1; i = i + 0.1){
            labels.push(`${i.toFixed(1)}`)
        }

        return labels

    }

    function montarDataGraficos () {

        const dataGrafico1 = []

        const dataGrafico2 = []

        const dataGrafico3 = []

        for (let i = 0; i < grafico1.length; i++){
            dataGrafico1.push(grafico1[i])
        }
    
        for (let i = 0; i < grafico2.length; i++){
            dataGrafico2.push(grafico2[i])
        }
    
        for (let i = 0; i < grafico3.length; i++){
            dataGrafico3.push(grafico3[i])
        }

        return [dataGrafico1, dataGrafico2, dataGrafico3]

    }

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );

}
