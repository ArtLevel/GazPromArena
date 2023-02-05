import {
	buttonDarkTheme
} from '../../main.js'

function addDarkTheme() {
		// Даём кнопке включения тёмной темы, класс 'theme-dark__btn--active' кнопке
		buttonDarkTheme.classList.add('theme-dark__btn--active')

		// Находим в кнопке включения тёмной темы div, который должен содержать в атрибуте class "theme-dark"
		buttonDarkTheme.querySelector('div[class*="theme-dark"]').classList.add('theme-dark-btn__item--active')

		// Находим и даём класс 'dark' тегу body
		document.body.classList.add('dark')

		// Добавляем в localStorage ключ DarkMode со значением dark
		localStorage.setItem('DarkMode', 'dark')
}

export default addDarkTheme