const btn = document.querySelector('#btncopiar');
          const textocod = document.querySelector('.textocod');

          btn.addEventListener('click', copiaTexto);

          function copiaTexto(e) {

            navigator.clipboard.writeText(textocod.innerText);

          }