const grafico = document.getElementById('grafico');

let graficoFinanciero;

export const createGrafico = (data,title, money) => {
  if (graficoFinanciero) {
    graficoFinanciero.destroy();
  }
  const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
  const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;
  graficoFinanciero = new Chart(grafico, {
    type: 'line',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Fondo negro con transparencia
    data:
    {
      labels: data.map((item) => item.fecha),
      datasets: [
        {
          label: 'Valor',
          data: data.map((item) => item.valor),
          borderColor: 'rgb(75 , 192, 192)', //Cambia el color de a linea
          segment: {
            borderColor: ctx => skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)'), //Si el elemento es menor a su antecesor cambia a rojo
            borderDash: ctx => skipped(ctx, [6,6]),
          },
          spanGaps: true,
        }],
    },
    options: 
    {
      responsive: true,
      aspectRatio: 1,
      plugins: 
      {
        title: 
        {
          display: true,
          text: 'Gráfico de variación de ' + title,
          font: 
          {
            size: 24,
          }
        },
      },
      scales:
      {
        x:
        {
          display:true,
          title:
          {
            display:true,
            text: 'Variación representada en día-mes',
            font:{
              size: 20,
              weight: 'bold',
            },
            padding: 10,
          },
        },
        y:
        {
          display:true,
          title:
          {
            display:true,
            text: money,
            font:{
              size: 20,
              weight: 'bold',
            },
            padding: 10,
          }
        }
      }
    }
  });
};