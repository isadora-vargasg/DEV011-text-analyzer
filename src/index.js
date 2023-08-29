import analyzer from './analyzer.js';

const textarea = document.querySelector("textarea");


textarea.addEventListener("keyup", (event) => {
  console.log(analyzer.getNumberSum(event.target.value))
  // analyzer.getAverageWordLength()
});

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`