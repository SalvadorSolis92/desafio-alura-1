   function cambiarImagen() {
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

    function encriptar() {
      cambiarImagen();
      //document.getElementById("imagen1").style.display = "none";
      // Aquí va la lógica para encriptar el texto
      let textoOriginal = document.getElementById('inputText').value;
      console.log('Texto encriptado:', textoOriginal);
      console.log('Texto encriptado:', textoOriginal.length);
      let textoEncriptado = '';
      // Lógica de encriptado...
      if (textoOriginal.length > 0) {
        for (let index = 0; index < textoOriginal.length ; index++) {
          const element = textoOriginal[index];
          console.log('textoOriginal= ', element);
        }
      }else{
        console.warn('no se introdujo texto');
      } 
      console.log('Texto encriptado:', textoOriginal);
    }

    function desencriptar() {
      cambiarImagen();
      // Aquí va la lógica para desencriptar el texto
      let texto = document.getElementById('inputText').value;
      // Lógica de desencriptado...
      console.log('Texto desencriptado:', texto);
    }
