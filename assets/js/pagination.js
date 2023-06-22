const viewTheme = () => {
    //Array de parametros 'chave=valor'
    var params = window.location.search.substring(1).split('&');
    const title = params[0].split('=')[1]
    const themes = document.querySelectorAll('.theme')
    let index
    // Se nÃ£o houver parametro abre o primeiro tema
    if (!title) {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('t', themes[0].dataset.title);
        return window.location.search = urlParams;
    }

    for (var i = 0; i < themes.length; i++) {
        if (themes[i].dataset.title !== title) {
            if (!themes[i].hasAttribute('hidden'))
                themes[i].setAttribute('hidden')
        } else {
            themes[i].removeAttribute('hidden')
            index = i
        }
    }
    viewButton(index, themes)
    asideActive(title)
    offCanvasActive(title)
}

const viewButton = (index, themes) => {
    const btnPrevious = document.querySelector('.btn-pages-previous')
    const btnNext = document.querySelector('.btn-pages-next')

    btnPrevious.removeAttributeNS('data-href', 'disabled')
    btnNext.removeAttributeNS('data-href', 'disabled')

    if (index === 0) {
        btnPrevious.setAttribute('disabled', true)
        btnNext.setAttribute('data-href', themes[++index].dataset.title)
    } else if (index === (themes.length - 1)) {
        btnPrevious.setAttribute('data-href', themes[--index].dataset.title)
        btnNext.setAttribute('disabled', true)
    } else {
        btnPrevious.setAttribute('data-href', themes[index - 1].dataset.title)
        btnNext.setAttribute('data-href', themes[index + 1].dataset.title)
    }
}

const clickButton = (btn) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('t', btn.dataset.href);
    return window.location.search = urlParams;
}

const asideActive = (title) => {
    const menuLateral = document.querySelectorAll('aside ul li')
    menuLateral?.forEach(li => {
        const a = li.children[0]
        if(a.href.split('t=')[1] === title){
            li.classList.add('active')
        }else{
            li.classList.remove('active')
        }
    })
}

const offCanvasActive = (title) => {
    const menuLateral = document.querySelectorAll('.list-group a')
    console.log(menuLateral)
    menuLateral.forEach(a => {
        if(a.href.split('t=')[1] === title){
            a.classList.add('active')
        }else{
            a.classList.remove('active')

        }
    })
}

viewTheme();