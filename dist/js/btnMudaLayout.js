'use strict';

;(function () {
		var btnMudaLayout = document.querySelector('#btnMudaLayout');
		var mural = document.querySelector('.mural');

		btnMudaLayout.classList.remove('no-js');

		btnMudaLayout.addEventListener('click', function () {

				if (mural.classList.contains('mural--linha')) {
						btnMudaLayout.textContent = 'Linhas';
				} else {
						btnMudaLayout.textContent = 'Blocos';
				}

				mural.classList.toggle('mural--linha');
				// toogle = remove & add - switching
		});
})();

// btnMudaLayout.addEventListener('click', function() {
//   if (this.textContent.trim() === 'Linhas') {
//     this.textContent = 'Blocos'
//   } else {
//     this.textContent = 'Linhas'
//   }
// })