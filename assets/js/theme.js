let theme = localStorage.getItem("theme");
const button = document.querySelector('.btn-theme')
const iconTheme = document.querySelectorAll('.icon-theme')
const rootElement = document.documentElement

// DESKTOP evento no button
document.querySelector('.btn-theme').addEventListener("click", function () {
    if (theme === 'light') {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }
    theme = localStorage.getItem("theme");
    updateIcon()
    updateThemeColor(theme === 'light' ? lightTheme : darkTheme)
})
// MOBILE evento no button
document.querySelector('.btn-theme-mobile').addEventListener("click", function () {
    if (theme === 'light') {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }
    theme = localStorage.getItem("theme");
    updateIcon()
    updateThemeColor(theme === 'light' ? lightTheme : darkTheme)
})
// Inicializar tema e alterar icones
const updateIcon = () => {
    if(!theme){
        alterIcons(iconTheme, 'nightlight')
        localStorage.setItem('theme', 'dark')
    }else if (theme === 'light') {
        alterIcons(iconTheme, 'wb_sunny')
    } else {
        alterIcons(iconTheme, 'nightlight')
    }
    updateThemeColor(theme === 'light' ? lightTheme : darkTheme)
}
// Alterar icones do desktop e mobile
const alterIcons = (spans, value) => {
    spans.forEach(span => {
        span.textContent = value
    });
}
// Altear a cor
const updateThemeColor = (theme) => {
    for(let prop in theme){
        rootElement.style.setProperty(prop, theme[prop])
    }
}
// Variavel Dark 
const darkTheme = {
    '--main-color': '#823b74',
    '--main-background-color': '#34383e',
    '--punctuation-color': '#fff',
    '--tag-color': 'rgb(74, 142, 206)',
    '--comment-color': 'rgb(20, 96, 27)',
    '--attribute-color': '#9ead16',
    '--value-color': '#ad1616',
    '--text-color': '#ffffff',
    '--title-color': '#dedede',
    '--link-color': '#b62f27',
    '--pre-background-color': '#222'
    
}
// Variavel light
const lightTheme = {
    '--main-color': '#b62f27',
    '--main-background-color': '#ffffff',
    '--punctuation-color': '#fff',
    '--tag-color': 'rgb(74, 142, 206)',
    '--comment-color': 'rgb(20, 96, 27)',
    '--attribute-color': '#9ead16',
    '--value-color': '#ad1616',
    '--text-color': '#823b74',
    '--title-color': '#dedede',
    '--link-color': '#34383e',
    '--pre-background-color': '#222'
    
}

updateIcon()
