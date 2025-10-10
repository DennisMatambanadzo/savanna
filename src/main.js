const menu = document.getElementById('menu')
const cart = document.getElementById('cart')
const overlay = document.getElementById('overlay')
const toggleOverlay = () => {
    cart.classList.toggle('-right-full')
    cart.classList.toggle('right-0')
    overlay.classList.toggle('hidden')
}
const cartClose = document.getElementById('cart-close')


menu.addEventListener('click', toggleOverlay)
overlay.addEventListener('click', toggleOverlay)

window.addEventListener('scroll', () => {
    // Only trigger if overlay is visible (not hidden)
    if (!overlay.classList.contains('hidden')) {
        toggleOverlay()
    }
})

cartClose.addEventListener('click', toggleOverlay)