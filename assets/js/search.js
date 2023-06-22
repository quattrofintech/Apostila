const input = document.querySelector("#search")
const div = document.querySelector('.content-search')


const addItensDesktop = (item) => {
    const a = document.createElement("a")
    item.link ?  a.href = item.link : null
    a.innerText = item.title
    a.classList.add("list-group-item")
    div.append(a)
}

input.addEventListener("input", function () {
    div.innerHTML = ""
    if (input.value.toLowerCase()) {
        const filtro = links.filter((item) => 
            item.search.toLowerCase().includes(input.value.toLowerCase())
        )
        for(var i = 0; i < filtro.length; i++){
            addItensDesktop(filtro[i])
            if(i >= 6){
                break
            }
        }
        if(!filtro.length){
            addItensDesktop({ title: 'Desculpe, não encontramos o que você pesquisou.'})
        }
    }
})

// Mobile
const inputMobile = document.querySelector('#search-mobile')
const divMobile = document.querySelector('.content-search-mobile')

const addItensMobile = (item) => {
    const a = document.createElement("a")
    item.link ?  a.href = item.link : null
    a.innerText = item.title
    a.classList.add("list-group-item")
    divMobile.append(a)
}

inputMobile.addEventListener("input", function () {
    divMobile.innerHTML = ""
    if (inputMobile.value.toLowerCase()) {
        const filtro = links.filter((item) => 
            item.search.toLowerCase().includes(inputMobile.value.toLowerCase())
        )
        for(var i = 0; i < filtro.length; i++){
            addItensMobile(filtro[i])
            if(i >= 6){
                break
            }
        }
        if(!filtro.length){
            addItensMobile({ title: 'Desculpe, não encontramos o que você pesquisou.'})
        }
    }
})

// Criar pesquisas aqui
const links = [
    { title: 'HTML5', link: 'html5.html', search: 'html5 site' },
    { title: 'Introdução - HTML5', link: 'html5.html?t=introducao', search: 'html5 site' },
    { title: 'Estruturas - HTML5', link: 'html5.html?t=estruturahtml', search: 'html5 site' },
    { title: 'CSS3', link: 'css3.html', search: ' site estilo estilizar css' },
    { title: 'Home', link: 'index.html', search: 'home inicio voltar começo' },
]