// Функция показа/закрытия контента аккордеона
function showContentAccordeon() {
	this.nextElementSibling.classList.toggle('hidden')
	const imgAccordeon = this.querySelector('#' + this.dataset.accordeonTitle)
	imgAccordeon.classList.toggle('accordeon-img-show')
}

// Экспортируем функцию показа/закрытия контента аккореона
export default showContentAccordeon