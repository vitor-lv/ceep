"use strict";

// ;(function() {


// 	const btnAjuda = document.querySelector("#btnAjuda")


// 	btnAjuda.addEventListener("click", function(){

//     const ajudas = [{conteudo: "Bem-vindo ao Ceep", cor: "#f05450"},
//     {conteudo: "Clique no botão linhas para alterar o Layout", cor: "#92c4ec"}]

// 		ajudas.forEach(function(ajuda){

//         window.ceep.addCartaoMural(ajuda)

//         })
//     })

//     btnAjuda.classList.remove('no-js')

// })()


;(function () {

    var btnAjuda = document.querySelector("#btnAjuda");

    btnAjuda.addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes');
        xhr.responseType = "json";
        xhr.send();

        xhr.addEventListener("load", function () {
            var objeto = xhr.response;
            var ajudas = objeto.instrucoes;
            console.log(ajudas);
            ajudas.forEach(function (ajuda) {
                window.ceep.addCartaoMural(ajuda);
            });
        });
    });

    btnAjuda.classList.remove('no-js');
})();