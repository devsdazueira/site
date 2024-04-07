function mudarTema() {
    var trocarEstilo = document.getElementById('mudarCor');
    if (trocarEstilo.href.endsWith('style/style.css')) {
        trocarEstilo.href = 'style/style2.css';
    } else {
        trocarEstilo.href = 'style/style.css';
    }
}

function mudarLogo() {
    var trocarLogo = document.getElementById('mudarPNG')
    if (trocarLogo.src.endsWith('NEW-branco.png')) {
        trocarLogo.src = 'NEW-preto.png';
    } else {
        trocarLogo.src = 'NEW-branco.png';
    }
}

function themeEscuro() {
    var mudarTema = document.getElementById('tema_escuro')
    if (mudarTema.src.endsWith('imagens/icons/tema_escuro.png')) {
        mudarTema.src = 'imagens/icons/tema-claro.png';
    } else {
        mudarTema.src = 'imagens/icons/tema_escuro.png';
    }
}