// ? Add an 'active' class where I click in the nav menu
const navbar_hooks = document.querySelectorAll('nav ul li a')
const logo_hook = document.querySelector('a.logo')

for (const element of navbar_hooks) {
  logo_hook.addEventListener('click', () => {
    for (let i = 0; i < navbar_hooks.length; i++) {
      navbar_hooks[i].parentElement.classList.remove('active')
    }
  })

  element.addEventListener('click', () => {
    for (let i = 0; i < navbar_hooks.length; i++) {
      if (navbar_hooks[i].parentElement.classList.contains('active')) {
        navbar_hooks[i].parentElement.classList.remove('active')
      }
    }
    element.parentElement.classList.add('active')
  })
}

// ? Open/close menu bar when clicked in burger icon or close icon
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

// ? Close menu when clicked in a hook
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}
