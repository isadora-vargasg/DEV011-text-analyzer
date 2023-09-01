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
  for (let i = 0; i < 6; i++) {
    listItems[i].innerHTML = resultados[i].text + resultados[i].result;
  }
});

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  location.reload();
})

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`