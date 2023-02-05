// Импортируем якори из файла main.js
import {
	anchors
} from '../main.js'

function smoothScroll() {
	// Разделяем Node List на разные элемента
	anchors.forEach(el => {
		// При клике на элемент, будет происходить функция плавного скролла
		el.addEventListener('click', function(event) {
			// Убираем у события стандартное поведение
			event.preventDefault()

			// Создаём переменную blockId, и присваиваем ей значение - название атрибута 'href' у элемента на который был произведён клик
			const blockId = el.getAttribute('href')

			// Блок кода который может выдать ошибку, помещаем в try/catch блок
			try {
				// Находим в документе элемент по id, к которому должен быть скролл
				// Вызываем у этого элемента метод scrollIntoView
				document.querySelector('#' + blockId).scrollIntoView({
					// Даём обьекту данные свойства:
					behavior: 'smooth',
					block: 'start'
				})
			} catch(error) {
				console.log(error)
			}
			
			
			// Находим в документе все модальные окна по id который должен содержать в значении 'modal'
			document.querySelectorAll('div[id*="modal"]').forEach(el => {
				// Выдаём всем модальным окнам класс 'hidden'
				el.classList.add('hidden')
			})

		})
	})
}

export default smoothScroll