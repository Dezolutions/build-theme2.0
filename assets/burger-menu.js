const btn = document.querySelector('.menu-checkbox__label')
const menu = document.querySelector('.header__menu-mobile')
const submenuOpenItems = document.querySelectorAll('.submenu-open')
const secondSubmenuOpenItems = document.querySelectorAll('.second-submenu-open')

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
