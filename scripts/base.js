const pageTop = document.getElementById('page-top')
const nav = document.querySelector('nav')
const navHighlightClass = 'highlight'

const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    nav.classList.remove(navHighlightClass)
  } else {
    nav.classList.add(navHighlightClass)
  }
})

window.onload = () => {
  observer.observe(pageTop)
}