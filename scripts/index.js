window.onscroll = function () {
  let header = document.getElementById('header-lg')
  let brand = document.getElementById('nav__brand')
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add('scrolled')
    brand.style.visibility = 'hidden'
    brand.style.height = '50px'
  } else {
    header.classList.remove('scrolled')
    brand.style.visibility = 'visible'
    brand.style.height = 'auto'
  }
}