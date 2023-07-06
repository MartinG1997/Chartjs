import { createGrafico } from './createGrafico.js'

const button = document.getElementById('button');
const inputText = document.getElementById('inputText');
let dolar;
const getDolar = async() => {
  const response = await fetch('https://api.gael.cloud/general/public/monedas');
  const data = await response.json();
  if(data.Codigo == "USD"){
    dolar = data.Valor
  }
}
getDolar().then(() => {

});

button.addEventListener('click', (e) => {
  e.preventDefault();
  const url = 'https://mindicador.cl/api/';
  let informacionFinanciera = [];
  let unidadMedida;

  const getData = async () => {

    const value = inputText.value;
  
    const response = await fetch(url + value);
    const data = await response.json();

    unidadMedida = data.unidad_medida;
    console.log(unidadMedida);

    informacionFinanciera = data.serie.map(item => {
      const fechaParts = item.fecha.substring(5, 10).split('-'); // Dividir la cadena de fecha en partes
      const fecha = fechaParts[1] + '-' + fechaParts[0]; // Intercambiar las posiciones del día y el mes
      return {
        fecha: fecha,
        valor: item.valor
      };
    })
  };

  getData().then(() => {
    createGrafico(informacionFinanciera.reverse());
    //document.getElementById("prueba").textContent = "El crecimiento fue de " + (informacionFinanciera[informacionFinanciera.length - 1].valor - informacionFinanciera[0].valor);
    document.getElementById("prueba").textContent = "El crecimiento fue de " + unidadMedida;
  });

});
