const analyzer = {  
  getWordCount: (text) => {
    const palabras = text.split(" ");
    const palabrasNoEspacio = palabras.filter(function(palabra){
      return palabra !== '';
    });
    return palabrasNoEspacio.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const textNoEspacios = text.replace(/[^\w\d]/g, ''); //expresión regular para reemplazar cualquier caracter que no sea una letra o número (\w representa letras y números, y \d representa solo números) con una cadena vacía
    const contCaractNoEspacios = textNoEspacios.length;
    return contCaractNoEspacios;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const palabrasTotales = text.split(/\s+/);
    const caracteresTotales = palabrasTotales.join('').length;
    if (palabrasTotales.length === 0){
      return 0;
    }
    const promedio = caracteresTotales / palabrasTotales.length;
    return promedio.toFixed(2);
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const numerosEncontrados = text.match(/-?\d+(\.\d+)?/g);
    const contNumeros = numerosEncontrados ? numerosEncontrados.length : 0;
    return contNumeros;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const numerosEncontrados = text.match(/-?\d+(\.\d+)?/g); //buscar todos los números en el texto, incluyendo números enteros y decimales
    let sumatoria = 0;
    if (numerosEncontrados) {
      for (let i = 0; i < numerosEncontrados.length; i++) {
        sumatoria += parseFloat(numerosEncontrados[i]);
      }
    }
    if (sumatoria <= 0) return 0;
    return sumatoria.toFixed(2);
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};
export default analyzer;
