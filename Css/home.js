function buttonclicked() {

    if (!document.querySelector("#searchInput").value) {
       document.querySelector("#errorMessage").innerHTML="campo de pesquisa obrigatorio";
       alert("o campo de pesquisa é obrigatorio");

    } 
        
    
    
}
document.querySelector("#searchButton").addEventListener("click",buttonclicked);
