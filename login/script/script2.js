function mudarTema1() {
    var trocarEstilo = document.getElementById('mudarCor1');
    if (trocarEstilo.href.endsWith('style/style.css')) {
        trocarEstilo.href = 'style/style2.css';
    } else {
        trocarEstilo.href = 'style/style.css';
    }
}

function mudarLogo1() {
    var trocarLogo = document.getElementById('mudarPNG1')
    if (trocarLogo.src.endsWith('imagens/logos/NSA3.png')) {
        trocarLogo.src = 'imagens/logos/NSA2.png';
    } else {
        trocarLogo.src = 'imagens/logos/NSA3.png';
    }
}