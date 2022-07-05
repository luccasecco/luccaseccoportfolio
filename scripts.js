var menuItem = document.querySelector('nav ul li a')
menuItem.classList.remove('menu')

const checkbox = document.getElementById('toggle')
const nav = document.getElementById('nav')

function close() {
  if (checkbox.checked === true) checkbox.checked = false
}

nav.addEventListener('click', close)
