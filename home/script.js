function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function tamanho() {
    if (window.innerWidth >= 800) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}