;(function() {
const btnMudaLayout = document.querySelector('#btnMudaLayout')
const mural = document.querySelector('.mural')

btnMudaLayout.classList.remove('no-js')


btnMudaLayout.addEventListener('click', () => {
  
	  if (mural.classList.contains('mural--linha')) {
	    btnMudaLayout.textContent = 'Linhas'
	  } else {
	    btnMudaLayout.textContent = 'Blocos'
	  }

	  mural.classList.toggle('mural--linha') 

	})

	





})()



