export const graphConfig = (grafico1, grafico2, grafico3) => {

    const labels = [
        `${grafico1[0][0]}`, 
        `${grafico1[1][0]}`,
        `${grafico1[2][0]}`,
        `${grafico1[3][0]}`,
        `${grafico1[4][0]}`,
        `${grafico1[5][0]}`,
        `${grafico1[6][0]}`,
        `${grafico1[7][0]}`,
        `${grafico1[8][0]}`,
        `${grafico1[9][0]}`
    ];
    
    const data = {
        labels: labels,
        datasets: [{
            label: 'Gráfico 1',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [grafico1[0][1], grafico1[1][1], grafico1[2][1], grafico1[3][1], grafico1[4][1], grafico1[5][1], grafico1[6][1], grafico1[7][1], grafico1[8][1], grafico1[9][1]]
        },
        {
            label: 'Gráfico 2',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [grafico2[0][1], grafico2[1][1], grafico2[2][1], grafico2[3][1], grafico2[4][1], grafico2[5][1], grafico2[6][1], grafico2[7][1], grafico2[8][1], grafico2[9][1]]   
        },
        {
            label: 'Gráfico 3',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [grafico3[0][1], grafico3[1][1], grafico3[2][1], grafico3[3][1], grafico3[4][1], grafico3[5][1], grafico3[6][1], grafico3[7][1], grafico3[8][1], grafico3[9][1]]  
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
                      text: 'N'
                    }
                }
            }
        }
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );

}
