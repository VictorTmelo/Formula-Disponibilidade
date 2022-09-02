export const graphConfig = (grafico1, grafico2, grafico3) => {

    const labels = [];

    for(let i = 0; i < 10; i++){
        labels.push(`${grafico1[i][0]}`)
    }
    
    const data = {
        labels: labels,
        datasets: [{
            label: 'K = 1',
            backgroundColor: 'rgb(58, 235, 52)',
            borderColor: 'rgb(58, 235, 52)',
            data: [grafico1[0][1], grafico1[1][1], grafico1[2][1], grafico1[3][1], grafico1[4][1], grafico1[5][1], grafico1[6][1], grafico1[7][1], grafico1[8][1], grafico1[9][1]]
        },
        {
            label: 'K = N / 2',
            backgroundColor: 'rgb(235, 235, 52)',
            borderColor: 'rgb(235, 235, 52)',
            data: [grafico2[0][1], grafico2[1][1], grafico2[2][1], grafico2[3][1], grafico2[4][1], grafico2[5][1], grafico2[6][1], grafico2[7][1], grafico2[8][1], grafico2[9][1]]   
        },
        {
            label: 'K = N',
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
