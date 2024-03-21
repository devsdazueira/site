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
    if (trocarLogo.src.endsWith('NSA.png')) {
        trocarLogo.src = 'NSA-escuro.png';
    } else {
        trocarLogo.src = 'NSA.png';
    }
}