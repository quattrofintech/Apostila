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
    '--main-color': '#0B2F4F',
    '--main-nav-color': '#124972',
    '--main-background-color': '#33383E',
    '--punctuation-color': '#fff',
    '--tag-color': 'rgb(74, 142, 206)',
    '--comment-color': 'rgb(20, 96, 27)',
    '--attribute-color': '#9ead16',
    '--value-color': '#ad1616',
    '--text-color': '#ffffff',
    '--code-color': '#fff',
    '--code-inline-background-color': '#F779EB',
    '--code-inline-color': '#ffffff',
    '--title-color': '#dedede',
    '--link-color': '#ffffff',
    '--pre-background-color': '#222',
    '--active-color': '#0B2F4F',
    '--active-text-color:': '#b62f27'

}
// Variavel light
const lightTheme = {
    '--main-color': '#1C77AF',
    '--main-nav-color': '#0B2F4F',
    '--main-background-color': '#ffffff',
    '--punctuation-color': '#fff',
    '--tag-color': 'rgb(74, 142, 206)',
    '--comment-color': 'rgb(20, 96, 27)',
    '--attribute-color': '#9ead16',
    '--value-color': '#ad1616',
    '--text-color': '#222',
    '--code-color': '#fff',
    '--code-inline-background-color': '#F779EB',
    '--code-inline-color': '#ffffff',
    '--title-color': '#dedede',
    '--link-color': '#0d2f4f',
    '--pre-background-color': '#222',
    '--active-color': '#1C77AF',
    '--active-text-color:': '#ffffff'
    
}

updateIcon()
