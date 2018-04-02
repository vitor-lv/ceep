;(function() {

const btnSync = $("#btnSync")
btnSync.click(function(){
    btnSync.addClass("botaoSync--esperando")
    btnSync.removeClass("botaoSync--sincronizando")

    const salvadorDeCartoes = new XMLHttpRequest()
    salvadorDeCartoes.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar')
    salvadorDeCartoes.setRequestHeader("Content-type", "application/json")

    const cartoes = document.querySelectorAll(".cartao")
    const infosDoMural = {
        usuario: "bcvitor1@gmail.com",
        cartoes: Array.from($(".cartao")).map(function(cartao){
            return {
                conteudo: cartao.querySelector(".cartao-conteudo").textContent,
                cor: getComputedStyle(cartao).getPropertyValue("background-color")
            }
        })
    }
    
    salvadorDeCartoes.send(JSON.stringify(infosDoMural))
    console.log(infosDoMural)
    
    salvadorDeCartoes.addEventListener("load", function(){
        const response = JSON.parse(salvadorDeCartoes.response)
        console.log(`${response.quantidade} cartões salvos em ${response.usuario}`)
        
        btnSync.removeClass("botaoSync--esperando")
        btnSync.addClass("botaoSync--sincronizado")
    })
    
    salvadorDeCartoes.addEventListener("error", function(){
        btnSync.removeClass("botaoSync--esperando")
        btnSync.addClass("botaoSync--deuRuim")
    })
    
    
})




btnSync.removeClass('no-js')

})()