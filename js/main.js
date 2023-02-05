// Импортируем:
import showContentAccordeon from './modules/moduleAccordeon.js'
import showModalWindow from './modules/moduleModalWindow.js'
import smoothScroll from './modules/moduleSmoothScroll.js'

import {
	darkThemeToggle
} from './modules/darkTheme/moduleDarkThemeToggle.js'

import addDarkTheme from './modules/darkTheme/moduleAddDarkTheme.js'

// * Новый блок кода: Проверка включена ли у пользователя тёмная тема

// Находим кнопку включения/отключения тёмной темы
const buttonDarkTheme = document.querySelector('#button-dark-theme')

if( localStorage.getItem('DarkMode') === 'dark' ) {
	addDarkTheme()
}

// * Новый блок кода: Аккардеон
// Находим все кнопки аккордеонов
const buttonAccordeon = document.querySelectorAll('[data-accordeon-title]')

// Разделяем Node list на отдельные кнопки
buttonAccordeon.forEach(function(el) {
	// При клике на кнопку, показываем контент
	el.addEventListener('click', showContentAccordeon)
})

// * Новый блок кода: Модалка
// Находим кнопки, закрыть/открыть модальные окна
const buttonsOpenModal = document.querySelectorAll('[data-modal-button]')

// Разбираем Node List на отдельные кнопки, открыть модалку
buttonsOpenModal.forEach(el => {
	// При клике на кнопку, выполняем открытие модалки
	el.addEventListener('click', showModalWindow)
})

// * Новый блок кода: Плавный скролл

// Находим все якоря которые содержат в атрибуте href '#'
const anchors = document.querySelectorAll('a[href*="anchor-"]')

// Разделяем Node List на разные элемента
anchors.forEach(el => {
	// При клике на элемент, будет происходить функция плавного скролла
	el.addEventListener('click', smoothScroll())
})

// * Новый блок кода: Тёмная тема

// При клике на кнопку будет добавляться/убираться тёмная тема
buttonDarkTheme.addEventListener('click', darkThemeToggle())

export {
	anchors,
	buttonDarkTheme
}