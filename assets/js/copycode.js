const btns = document.querySelectorAll('.btn-outline-info');

btns.forEach((btn) => {
  btn.addEventListener('click', copiaTexto);
})

function copiaTexto(e) {
  let texto = ''
  const body = e.target.parentElement.parentElement.parentElement.querySelectorAll('.code-body pre code div')
  body.forEach((txt) => {
    texto += txt.textContent.replace('\n', '')
  })
  navigator.clipboard.writeText(texto);
}



