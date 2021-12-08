const slider = document.querySelector('.slider')
const buttonNext = document.querySelector('.slider-button-next')
const buttonPrev = document.querySelector('.slider-button-prev')
const sheet = document.querySelector('.sheet')
const sidebar = document.querySelector('.sidebar')
const burgerMenu = document.querySelector('.burger-menu')
const sidebarNav = document.querySelectorAll('.sidebar-nav-list__component')
const sideBarBurgerButton = document.querySelector('.sidebar-button')
function toggleSlider(e) {
  slider.classList.toggle('slider-2')
  slider.classList.toggle('slider-1')
}
function hideSidebar() {
  sheet.classList.add('burger-disabled')
  sidebar.classList.add('burger-disabled')
}

buttonNext.addEventListener('click', toggleSlider)
buttonPrev.addEventListener('click', toggleSlider)

sheet.addEventListener('click', hideSidebar)

burgerMenu.addEventListener('click', () => {
  sheet.classList.remove('burger-disabled')
  sidebar.classList.remove('burger-disabled')
})
sidebarNav.forEach((element) => {
  element.addEventListener('click', hideSidebar)
})
sideBarBurgerButton.addEventListener('click', hideSidebar)
