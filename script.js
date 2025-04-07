document.addEventListener("DOMContentLoaded", function() {  
    const titulo = document.getElementById("titulo");  
    const texto = titulo.textContent;  
    titulo.textContent = ""; // Limpa o texto inicial  

    let index = 0;  

    function adicionarLetra() {  
        if (index < texto.length) {  
            titulo.textContent += texto.charAt(index);  
            index++;  
            setTimeout(adicionarLetra, 200); // espera 200ms antes de adicionar a próxima letra  
        }  
    }  

    adicionarLetra();  
});  