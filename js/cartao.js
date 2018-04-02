;(() =>   {

	const cartoes = document.querySelectorAll(".cartao")

	// for (let j = 0; j < cartoes.length; j++) {
	// 	const cartao = cartoes[j]

	// 	cartao.on("focusin", function (){
	// 		cartao.classList.add("cartao--focado")
	// 	})

	// 	cartao.on("focusout", function (){
	// 		cartao.classList.remove("cartao--focado")
	// 	})
	

	//  	cartao.on("change", ".opcoesDoCartao-radioTipo", function mudaCor (event) {
	//  		cartao.css("background-color", event.target.value)

	//  			// if(cartao.style.backgroundColor == 'rgb(240, 84, 80)'){
	// 				// cartao.classList.add("teste")

	//  			// } else(cartao.classList.remove("teste"))
	//  	})


	 			




 			
 // 		cartao.addEventListener('click', function() {
	// 	if(event.target.classList.contains("opcoesDoCartao-remove")){
			
	// 		cartao.addEventListener("transitionend", function (event) {
	// 		if (event.propertyName == 'opacity') {
	// 		cartao.remove()
	// 		}
	// 		})

	// 		cartao.classList.add("cartao--some")
		
	// 		}
	// 	})

	// 	cartao.addEventListener("keyup", function(event){
	// 		const isLabelTipo = event.target.classList.contains("opcoesDoCartao-tipo")
			
	// 		if(isLabelTipo && (event.key === "Enter" || event.key === " ")) {
	// 			event.target.click()
	// 		}
	// 	})
	// }


	



	let numeroDoCartao = 0
	const form = document.querySelector(".formNovoCartao")

	form.addEventListener("submit", function(event){
		event.preventDefault()
		
		const textarea = form.querySelector(".formNovoCartao-conteudo")
		
		const isTextAreaVazio = textarea.value.trim().length === 0
		
		if(isTextAreaVazio){
			const msgErro = document.createElement("div")
			msgErro.classList.add("formNovoCartao-msg")
			msgErro.textContent = "Formulário inválido. Não digite vários nada!"

			const btnSubmit = form.children[form.children.length-1]
			form.addEventListener("animationend", function(event){
				event.target.remove()
			})
			
			form.insertBefore(msgErro, btnSubmit)
		} else {

			window.ceep.addCartaoMural({conteudo: textarea.value})
		}
		textarea.value= ""
	})


	

})()











