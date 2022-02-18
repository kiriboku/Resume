let menu = document.querySelector('#menu-btn')
let header = document.querySelector('.header')
const teslaWeb = document.getElementById('tesla-website')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')
}

let themeToggler = document.querySelector('#theme-toggler')

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun')
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active')
    }
}

teslaWeb.onclick = () => {
    window.open("./project/Tesla Website/index.html")
}
