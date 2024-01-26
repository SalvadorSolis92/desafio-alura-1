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
      document.getElementById("imagen1").style.display = "none";
      // Aquí va la lógica para encriptar el texto
      let texto = document.getElementById('inputText').value;
      // Lógica de encriptado...
      console.log('Texto encriptado:', texto);
    }

    function desencriptar() {
      cambiarImagen();
      // Aquí va la lógica para desencriptar el texto
      let texto = document.getElementById('inputText').value;
      // Lógica de desencriptado...
      console.log('Texto desencriptado:', texto);
    }
