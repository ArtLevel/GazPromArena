// Находим кнопки закрыть модалку
const buttonsCloseModal = document.querySelectorAll('[data-modal-close-button]')

// Функция открыть/закрыть модалку
function showModalWindow() {
	// Находим модалку и блок кода на котором будет заканчиваться event клик
	const modal = document.querySelector('#' + this.dataset.modalButton)
	const modalStopPropagation = modal.querySelector('#modalStopPropagation')

	// Убираем у модалки класс hidden
	modal.classList.remove('hidden')
	// При клике на модалку, закрываем её
	modal.addEventListener('click', function() {
		modal.classList.add('hidden')
	})
	// Заканчиваем event клик на блоке кода, который отвечает за контент модалки
	modalStopPropagation.addEventListener('click', (event) => {
		event.stopPropagation()
	})

	// Разбираем Node List на отдельные кнопки, закрыть модалку
	buttonsCloseModal.forEach(el => {
		// При клике на закрыть модалку, закрываем её
		el.addEventListener('click', function() {
			modal.classList.add('hidden')
		})
	})

}

export default showModalWindow