import analyzer from './analyzer.js';

const textarea = document.querySelector("textarea");


textarea.addEventListener("keyup", (event) => {
    const resultados = [
        {
            text: 'Palabras totales: ',
            result: analyzer.getWordCount(event.target.value),
        },
        {
            text: 'Caracteres totales: ',
            result: analyzer.getCharacterCount(event.target.value),
        },
        {
            text: 'Caracteres sin espacios: ',
            result: analyzer.getCharacterCountExcludingSpaces(event.target.value),
        },
        {
            text: 'Números totales: ',
            result: analyzer.getNumberCount(event.target.value),
        },
        {
            text: 'Sumatoria de números totales: ',
            result: analyzer.getNumberSum(event.target.value),
        },
        {
            text: 'Longitud promedio de palabras: ',
            result: analyzer.getAverageWordLength(event.target.value),
        },
    ];
    const listItems = document.querySelectorAll("li");
  //console.log(listItems)
  for (let i = 0; i < 6; i++) {
    console.log('res ', listItems[i].innerText.split(":")[0])
    // listItems[i].innerText =  listItems[i].innerText.split(":")[0] + resultados[i];
    listItems[i].innerText =  resultados[i].text + resultados[i].result;
  }
  // analyzer.getAverageWordLength()
});

let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', _=>{
    location.reload();
})

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`