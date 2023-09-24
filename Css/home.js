function buttonclicked() {

    if (!document.querySelector("searchInput").value) {
       document.querySelector("errorMensage").innerHTML="campo de pesquisa obrigatorio";

    } 
        
    
    
}
document.querySelector("searchInput").addEventListener("click",buttonclicked);
