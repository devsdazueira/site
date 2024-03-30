<?php
// Verifica se os dados foram enviados via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os dados do formulário
    $icodigoescolar = $_POST["Código Escolar"];
    $iRM = $_POST["RM"];

    // Salva os dados em um arquivo ou em um banco de dados, por exemplo
    // Neste exemplo, estamos apenas exibindo os dados
    echo "Código Escolar: " . $icodigoescolar . "<br>";
    echo "RM: " . $iRM . "<br>";

    // Redireciona para outro site com os dados como parâmetros na URL
    $url = "../home/index.html" . urlencode($icodigoescolar) . "&iRM=" . urlencode($iRM);
    header("Location: " . $url);
    exit();
}
?>
