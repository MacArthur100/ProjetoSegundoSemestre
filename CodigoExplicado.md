Trabalho do segundo semestre Prática de Desing - 2º Semestre FATEC 

Código explicado:

HTML:

Vamos fazer uma análise linha a linha desse código HTML:
<!DOCTYPE html>  
Linha 1: Declara o tipo de documento. Aqui, especifica que o documento é um HTML5, o que ajuda os navegadores a renderizar a página corretamente.
<html lang="pt-BR">  
Linha 2: Abre a tag <html>, que define o início do documento HTML. O atributo lang="pt-BR" indica que o idioma principal da página é o português do Brasil.
<head>  
Linha 3: Abre a seção <head>, que contém metadados sobre o documento, como o título da página e links para scripts e estilos.
    <meta charset="UTF-8">  
Linha 4: Define a codificação de caracteres como UTF-8. Isso é importante para garantir que todos os caracteres sejam exibidos corretamente, principalmente acentos e caracteres especiais.
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
Linha 5: Define as configurações de visualização para dispositivos móveis. O atributo content ajusta a largura da página à largura da tela do dispositivo.
    <title>Meu Site</title>  
Linha 6: Define o título da página, que aparece na aba do navegador. Neste caso, o título é "Meu Site".
    <link rel="stylesheet" href="style.css">  
Linha 7: Importa um arquivo CSS chamado style.css que contém estilos para a página, permitindo que você estilize os elementos de forma externa.
</head>  
Linha 8: Fecha a seção <head>.
<body>  
Linha 9: Abre a seção <body>, que contém o conteúdo visível da página.
    <header>  
Linha 10: Abre a seção <header>, que geralmente contém conteúdo introdutório ou elementos de navegação.
        <div class="barra-superior">  
Linha 11: Abre uma <div> com a classe barra-superior. Essa <div> pode ser estilizada separadamente no CSS.
            <h1 id="titulo">Bem-vindo ao nosso site!</h1>  
Linha 12: Adiciona um título de nível 1 (<h1>) com um ID titulo. O texto exibido é “Bem-vindo ao nosso site!”.
        </div>  
Linha 13: Fecha a <div> da barra-superior.
        <div class="barra-menu">  
Linha 14: Abre outra <div> com a classe barra-menu, que será usada para o menu de navegação.
            <nav>  
Linha 15: Abre a tag <nav>, que semantics defines a section for navigation links.
                <ul>  
Linha 16: Abre uma lista não ordenada (<ul>) para agrupar os itens de navegação.
                    <li><a href="#">Início</a></li>  
Linha 17: Define um item de lista (<li>) com um link (<a>) que leva à página inicial. O href="#" é um placeholder, geralmente usado para indicar que o link ainda não foi definido.
                    <li><a href="#">Sobre</a></li>  
Linha 18: Outro item de lista que direciona à seção "Sobre".
                    <li><a href="#">Serviços</a></li>  
Linha 19: Outro item de lista que seria utilizado para acessar a seção de "Serviços".
                    <li><a href="#">Contatos</a></li>  
Linha 20: Um item de lista para a seção de "Contatos".
                </ul>  
Linha 21: Fecha a lista não ordenada.
            </nav>  
Linha 22: Fecha a tag <nav>.
        </div>  
Linha 23: Fecha a <div> da barra-menu.
    </header>  
Linha 24: Fecha a seção <header>.
    <main>  
Linha 25: Abre a seção <main>, que contém o conteúdo principal da página.
        <p>Bem-vindo ao nosso site!</p>  
Linha 26: Adiciona um parágrafo (<p>) com a mensagem "Bem-vindo ao nosso site!".
    </main>  
Linha 27: Fecha a seção <main>.
    <footer>  
Linha 28: Abre a seção <footer>, que geralmente contém informações sobre a página ou direitos autorais.
        <p>FATEC - MOCOCA SP 2025</p>  
Linha 29: Adiciona um parágrafo (<p>) com informações sobre a FATEC de Mococa e o ano.
    </footer>  
Linha 30: Fecha a seção <footer>.
    <script src="script.js"></script>  
Linha 31: Importa um arquivo JavaScript chamado script.js, que pode conter scripts para funcionalidades interativas na página.
</body>  
Linha 32: Fecha a seção <body>.
</html>  
Linha 33: Fecha a tag <html>, indicando o fim do documento HTML.
Esse é um resumo do código HTML 

CSS:

Vamos analisar esse código CSS linha a linha para entender como ele estiliza elementos HTML:
body {  
    font-family: Arial, sans-serif;  
    margin: 0;  
}  
Linhas 1-4: Define o estilo do corpo da página.
•	font-family: Arial, sans-serif; usa a fonte Arial como padrão. Se não estiver disponível, uma fonte sem serifa será usada.
•	margin: 0; remove a margem padrão do navegador, garantindo que o conteúdo ocupe toda a largura da página.
.barra-superior {  
    background-color: #007BFF;  
    color: white;  
    padding: 10px;  
    text-align: center;  
}  
Linhas 5-9: Estiliza a classe barra-superior.
•	background-color: #007BFF; define a cor de fundo como um azul específico.
•	color: white; define a cor do texto como branca.
•	padding: 10px; adiciona um espaçamento de 10 pixels ao redor do conteúdo da barra.
•	text-align: center; centraliza o texto dentro da barra.
.barra-menu {  
    background-color: #0056b3;  
    color: white;  
    padding: 10px 0;  
    text-align: center; /* Centraliza o texto da barra menu */  
}  
Linhas 10-14: Define os estilos para a classe barra-menu.
•	background-color: #0056b3; usa um azul mais escuro para o fundo.
•	color: white; mantém o texto em branco.
•	padding: 10px 0; adiciona espaçamento vertical (10px acima e abaixo) e nenhum espaçamento horizontal.
•	text-align: center; centraliza o texto na barra.
.barra-menu nav ul {  
    list-style-type: none;  
    padding: 0;  
    display: flex; /* Usamos flexbox para alinhar os itens do menu */  
    justify-content: center; /* Centraliza os itens do menu */  
}  
Linhas 15-20: Estiliza a lista não ordenada (<ul>) dentro da barra-menu.
•	list-style-type: none; remove os marcadores padrão da lista.
•	padding: 0; remove o preenchimento padrão da lista.
•	display: flex; transforma a lista em um contêiner flexível, permitindo o alinhamento dos itens.
•	justify-content: center; centraliza os itens da lista ao longo do eixo principal (horizontal).
.barra-menu nav ul li {  
    margin: 0 15px;  
}  
Linhas 21-24: Define o estilo para os itens da lista (<li>).
•	margin: 0 15px; adiciona uma margem de 0 pixels acima e abaixo e 15 pixels à esquerda e à direita, espaçando os itens do menu.
.barra-menu nav ul li a {  
    color: white;  
    text-decoration: none;  
}  
Linhas 25-28: Estiliza os links (<a>) dentro dos itens da lista.
•	color: white; mantém os links na cor branca.
•	text-decoration: none; remove o sublinhado padrão dos links.
.barra-menu nav ul li a:hover {  
    color: lightblue; /* Altera a cor do texto ao passar o mouse */  
}  
Linhas 29-32: Define o estilo dos links quando o mouse está sobre eles (hover).
•	color: lightblue; muda a cor do texto para azul claro ao passar o mouse, proporcionando feedback visual ao usuário.
footer {  
    background-color: #007BFF;  
    color: white;  
    text-align: center;  
    padding: 10px 0;  
    position: relative;  
    bottom: 0;  
    width: 100%;  
}  
Linhas 33-41: Estiliza o rodapé (<footer>).
•	background-color: #007BFF; usa o mesmo azul da barra-superior.
•	color: white; mantém o texto em branco.
•	text-align: center; centraliza o texto no rodapé.
•	padding: 10px 0; adiciona 10 pixels de espaçamento vertical.
•	position: relative; permite posicionar o rodapé em relação ao seu lugar no fluxo da página.
•	bottom: 0; não tem efeito significativo aqui, já que a posição é relativa.
•	width: 100%; faz o rodapé ocupar toda a largura da tela.
main {  
    padding: 20px;  
    text-align: center;  
    font-size: 18px;  
}  
Linhas 42-46: Define os estilos para a seção principal (<main>).
•	padding: 20px; adiciona um preenchimento de 20 pixels ao redor do conteúdo.
•	text-align: center; centraliza o texto dentro da seção principal.
•	font-size: 18px; define um tamanho de fonte confortável de 18 pixels para legibilidade.
.rodapé {
    background-color: #222;
}
Linhas 47-50: Estiliza a classe rodapé.
•	background-color: #222; define um fundo escuro (quase preto) para a seção com a classe rodapé, embora não esteja claro no contexto se esta classe é usada no HTML fornecido.
Esse é um resumo das regras CSS que definem a aparência e o comportamento visual da estrutura HTML anterior. 


JavaScript

Vamos analisar este código JavaScript linha a linha. Este script adiciona um efeito de digitação ao título de uma página quando o DOM está completamente carregado.
document.addEventListener("DOMContentLoaded", function() {  
Linha 1: Adiciona um event listener ao objeto document que aguarda o evento "DOMContentLoaded". Isso garante que o código dentro da função só será executado uma vez que o DOM (Document Object Model) esteja completamente carregado e a estrutura HTML esteja acessível.
    const titulo = document.getElementById("titulo");  
Linha 2: Usa document.getElementById("titulo") para selecionar o elemento HTML com o ID titulo (que é o título principal da página) e armazena essa referência na constante titulo.
    const texto = titulo.textContent;  
Linha 3: Armazena o texto atual do elemento titulo na constante texto. Isso permite que o script utilize o texto para o efeito de digitação mais adiante.
    titulo.textContent = ""; // Limpa o texto inicial  
Linha 4: Limpa o conteúdo de texto do elemento titulo, definindo textContent como uma string vazia (""). Isso prepara o elemento para exibir o texto letra por letra.
    let index = 0;  
Linha 5: Declara uma variável index e inicializa-a com 0. Esta variável será usada para acompanhar a posição da letra que está sendo adicionada ao título.
    function adicionarLetra() {  
Linha 6: Define uma função chamada adicionarLetra que será responsável por adicionar uma letra ao titulo em cada chamada.
        if (index < texto.length) {  
Linha 7: Verifica se o valor da variável index é menor que o comprimento do texto armazenado em texto. Isso garante que o código dentro do bloco só seja executado enquanto houver letras para adicionar.
            titulo.textContent += texto.charAt(index);  
Linha 8: Adiciona ao textContent do titulo a letra localizada na posição index do texto original. texto.charAt(index) retorna o caractere na posição index.
            index++;  
Linha 9: Incrementa o valor de index em 1 para preparar para a próxima letra na próxima chamada da função.
            setTimeout(adicionarLetra, 200); // espera 200ms antes de adicionar a próxima letra  
Linha 10: Usa setTimeout para chamar a função adicionarLetra após um atraso de 200 milissegundos (0,2 segundos). Isso cria um efeito de digitação, onde uma letra é adicionada a cada 200 ms.
        }  
    }  
Linhas 11-12: Fecha o bloco if e a função adicionarLetra.
    adicionarLetra();  
Linha 13: Chama a função adicionarLetra() pela primeira vez, iniciando o processo de adicionar letras ao título.
});  
Linha 14: Fecha a função anônima que é chamada quando o DOM está pronto. Essa linha também fecha a chamada do addEventListener.
Resumo
Este código controla um efeito de digitação no título de uma página. Assim que a página é carregada, ele seleciona o título, limpa-o e inicia o processo de adicionar uma letra de cada vez com um intervalo de 200 milissegundos entre cada letra, criando uma animação de digitação visual. Se você tiver mais perguntas ou desejar discutir algum aspecto em mais detalhes, sinta-se à vontade para perguntar!

