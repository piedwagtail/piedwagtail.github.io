const handleThemeSelection = (event) => {
	const theme = event.target.getAttribute('data-theme');
	document.documentElement.setAttribute('data-selected-theme', theme);
}

const themeSwitcher = document.querySelector('.theme-switcher');
const buttons = themeSwitcher.querySelectorAll('button');


buttons.forEach((button) => {
   button.addEventListener('click', handleThemeSelection);
});