"use strict";

;(function () {
    var numeroDoCartao = 0;

    window.ceep = {};

    window.ceep.addCartaoMural = function addCartaoMural(cartaoObj) {
        numeroDoCartao++;
        var conteudoDoCartao = cartaoObj.conteudo;
        var corDoCartao = cartaoObj.cor;

        // Template String
        var cartao = $("\n                    <article id=\"cartao_" + numeroDoCartao + "\" tabindex=\"0\" class=\"cartao\" style=\"background-color:" + corDoCartao + "\">\n                        <div class=\"opcoesDoCartao\">\n                        <button class=\"opcoesDoCartao-remove opcoesDoCartao-opcao\" tabindex=\"0\">\n                        <svg><use xlink:href=\"#iconeRemover\"></use></svg>\n                        </button>\n\n            <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#EBEF40\" id=\"corDoCartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\" checked >\n            <label for=\"corDoCartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #EBEF40;\" tabindex=\"0\">\n                Normal\n            </label>\n\n            <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#FF2900\" id=\"corImportante-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\" >\n            <label for=\"corImportante-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #FF2900;\" tabindex=\"0\">\n                Importante\n            </label>\n\n\n            <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#92C4EC\" id=\"corTarefa-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\">\n            <label for=\"corTarefa-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #92C4EC;\" tabindex=\"0\">\n                Tarefa\n            </label>\n\n            <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#76EF40\" id=\"corInspira\xE7\xE3o-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\">\n            <label for=\"corInspira\xE7\xE3o-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #76EF40;\" tabindex=\"0\">\n                Inspira\xE7\xE3o\n            </label>\n            </div>\n            <p class=\"cartao-conteudo\" contenteditable tabindex=\"0\">" + conteudoDoCartao + "</p>\n        </article>\n\n                    ");

        cartao.on("focusin", function () {
            cartao.addClass("cartao--focado");
        });

        cartao.on("focusout", function () {
            cartao.removeClass("cartao--focado");
        });

        cartao.on("change", ".opcoesDoCartao-radioTipo", function mudaCor(event) {
            cartao.css("background-color", event.target.value);
        });

        cartao.on("keydown", function deixarClicarComEnter(event) {
            if (event.target.classList.contains("opcoesDoCartao-opcao") && (event.key === "Enter" || event.key === " ")) {
                event.target.click();
            }
        });

        cartao.on("click", function (event) {

            var elementoSelecionado = event.target;
            if (elementoSelecionado.classList.contains('opcoesDoCartao-remove')) {
                cartao.addClass("cartao--some");

                cartao.on("transitionend", function () {
                    cartao.remove();
                });
            }
        });

        $(".mural").append(cartao);
    };

    $.ajax({
        url: "https://ceep.herokuapp.com/cartoes/carregar",
        method: "GET",
        data: { usuario: "bcvitor1@gmail.com" },
        dataType: "jsonp",
        sucess: function sucess(objeto) {
            var cartoes = objeto.cartoes;
            cartoes.forEach(function (cartao) {
                addCartaoMural(cartao);
            });
        }

    });
})();