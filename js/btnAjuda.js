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
        


;(function() {
        
                
            const btnAjuda = document.querySelector("#btnAjuda")
            
            
            
        
        btnAjuda.addEventListener("click", function(){
            const xhr = new XMLHttpRequest ()
            xhr.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes')
            xhr.responseType = "json"
            xhr.send()
            
            xhr.addEventListener("load", function(){
                const objeto = xhr.response
                const ajudas = objeto.instrucoes
                console.log(ajudas)
                ajudas.forEach(function(ajuda){
                    window.ceep.addCartaoMural(ajuda)
                })
            })
        })
            
            btnAjuda.classList.remove('no-js')
        
        })()