import {
	buttonDarkTheme
} from '../../main.js'

function darkThemeToggle() {
	// При клике на кнопку будет добавляться/убираться тёмная тема
	buttonDarkTheme.addEventListener('click', () => {
		// Даём кнопке включения/отключения тёмной темы, класс 'theme-dark__btn--active' кнопке
		buttonDarkTheme.classList.toggle('theme-dark__btn--active')

		// Находим в кнопке включения/отключения тёмной темы div, который должен содержать в атрибуте class "theme-dark"
		buttonDarkTheme.querySelector('div[class*="theme-dark"]').classList.toggle('theme-dark-btn__item--active')

		// Находим и даём класс 'dark' тегу body
		const darkThemeActive = document.body.classList.toggle('dark')

		// Добавляем в localStorage ключ DarkMode со значением dark или light, в зависимости какая тема
		darkThemeActive
			? localStorage.setItem('DarkMode', 'dark')
			: localStorage.setItem('DarkMode', 'light')
	})
}

export {
	darkThemeToggle
}