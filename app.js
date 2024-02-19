//En caso de que la caja de entrada este vacia
function errorTextoVacio() {
  var img1 = document.getElementById('imagen1');
  var img2 = document.getElementById('imagen2');

  if (img1.style.display !== 'none') {
    img1.style.display = 'none';
    img2.style.display = 'block';
  } else {
    img1.style.display = 'block';
    img2.style.display = 'none';
  }
}

//Algoritmo para encriptar el texto ingresado
function encriptar() {
  // Aquí va la lógica para encriptar el texto
  let textoOriginal = document.getElementById('inputText').value;
  let textoEncriptado = '';
  // Lógica de encriptado...
  if (textoOriginal.length > 0) {
    for (let index = 0; index < textoOriginal.length; index++) {
      const element = textoOriginal[index];

      switch (element) {
        case 'e':
          textoEncriptado += 'enter';
          break;
        case 'i':
          textoEncriptado += 'imes';
          break;
        case 'a':
          textoEncriptado += 'ai';
          break;
        case 'o':
          textoEncriptado += 'ober';
          break;
        case 'u':
          textoEncriptado += 'ufat';
          break;
        default:
          textoEncriptado += element;
          break;
      }
    }
    //mostrar respuesta al usuario
    enviarRespuestaFront(textoEncriptado);
  } else {
    console.warn('no se introdujo texto');
    errorTextoVacio();
  }
}

//muestra la respuesta encriptado/desencriptado al usuario
function enviarRespuestaFront(textoEncriptado) {
  var img2 = document.getElementById('imagen2');
  img2.style.display = 'none';
  
  var contenedor = document.getElementById('contenedor-respuesta');
  contenedor.style.display = 'block';

  document.getElementById('outputText').innerHTML = textoEncriptado;
}

//Algoritmo para desencriptar el texto
function desencriptar() {
  // Aquí va la lógica para encriptar el texto
  let textoDesencriptado = '';
  let subcadena = '';
  let textoEncriptado = document.getElementById('inputText').value;
  // Lógica de encriptado...
  if (textoEncriptado.length > 0) {
    for (let index = 0; index < textoEncriptado.length; index++) {
      const element = textoEncriptado[index];

      switch (element) {
        case 'e'://enter
          subcadena = textoEncriptado.substring(index, index + 5);
          if (subcadena == 'enter') {
            textoDesencriptado += 'e';
            index += 4;
          }
          break;
        case 'i'://imes
          subcadena = textoEncriptado.substring(index, index + 4);
          if (subcadena == 'imes') {
            textoDesencriptado += 'i';
            index += 3;
          }
          break;
        case 'a'://ai
          subcadena = textoEncriptado.substring(index, index + 2);
          if (subcadena == 'ai') {
            textoDesencriptado += 'a';
            index += 1;
          }
          break;
        case 'o'://ober
          subcadena = textoEncriptado.substring(index, index + 4);
          if (subcadena == 'ober') {
            textoDesencriptado += 'o';
            index += 3;
          }
          break;
        case 'u'://ufat
          subcadena = textoEncriptado.substring(index, index + 4);
          if (subcadena == 'ufat') {
            textoDesencriptado += 'u';
            index += 3;
          }
          break;
        default:
          textoDesencriptado += element;
          break;
      }
    }
    //mostrar respuesta al usuario
    enviarRespuestaFront(textoDesencriptado);
  } else {
    console.warn('no se introdujo texto');
    errorTextoVacio();
  }
}

function copiar(){
  // Crea un campo de texto "oculto"
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById('outputText').innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}
