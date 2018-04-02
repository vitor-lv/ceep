;(function(){
    let numeroDoCartao = 0
   
    window.ceep = {}

    window.ceep.addCartaoMural = function addCartaoMural(cartaoObj){
        numeroDoCartao++
        const conteudoDoCartao = cartaoObj.conteudo
        const corDoCartao = cartaoObj.cor
                
        // Template String
        const cartao = $(`
                    <article id="cartao_${numeroDoCartao}" tabindex="0" class="cartao" style="background-color:${corDoCartao}">
                        <div class="opcoesDoCartao">
                        <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                        <svg><use xlink:href="#iconeRemover"></use></svg>
                        </button>

            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corDoCartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" checked >
            <label for="corDoCartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                Normal
            </label>

            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#FF2900" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" >
            <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #FF2900;" tabindex="0">
                Importante
            </label>


            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                Tarefa
            </label>

            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                Inspiração
            </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${conteudoDoCartao}</p>
        </article>

                    `)

            cartao.on("focusin", function (){
                cartao.addClass("cartao--focado")
            })

            cartao.on("focusout", function (){
                cartao.removeClass("cartao--focado")
            })
        

            cartao.on("change", ".opcoesDoCartao-radioTipo", function mudaCor (event) {
                cartao.css("background-color", event.target.value)

            })

            cartao.on("keydown", function deixarClicarComEnter(event){
                if(event.target.classList.contains("opcoesDoCartao-opcao") && (event.key === "Enter" || event.key === " ")){
                    event.target.click()
                }
            })

            cartao.on("click", function(event) {

                const elementoSelecionado = event.target
                if(elementoSelecionado.classList.contains('opcoesDoCartao-remove')){
                    cartao.addClass("cartao--some")
                    
                    cartao.on("transitionend", function(){
                        cartao.remove()
                    })
                }

                
            })



                $(".mural").append(cartao)
    }
        


$.ajax({
    url: "https://ceep.herokuapp.com/cartoes/carregar",
    method: "GET",
    data: {usuario: "bcvitor1@gmail.com"},
    dataType: "jsonp",
    sucess: (objeto) => {
        const cartoes = objeto.cartoes
        cartoes.forEach((cartao) => {
            addCartaoMural(cartao)
        })
    }
    
})

})() 