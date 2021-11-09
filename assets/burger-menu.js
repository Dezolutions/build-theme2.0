const btn = document.querySelector('.menu-checkbox__label')
const checkbox = document.querySelector('#menu_checkbox')
const menu = document.querySelector('.header__menu-mobile')
const submenuOpenItems = document.querySelectorAll('.submenu-open')
const secondSubmenuOpenItems = document.querySelectorAll('.second-submenu-open')
const links = document.querySelectorAll('a.header__item-link')

submenuOpenItems.forEach(item => {
  item.onclick = () => {
    item.parentNode.children[1].classList.toggle('submenu-mobile__active')  
  }
})

secondSubmenuOpenItems.forEach(item => {
  item.onclick = () => {
    item.parentNode.children[1].classList.toggle('second-submenu-mobile__active')
  }
})

btn.onclick = () => {
  menu.classList.toggle('header__menu-mobile__active')
}

links.forEach(link => link.addEventListener('click', () => checkbox.checked = false))

