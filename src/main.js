const menu = document.getElementById('menu')
const menuMobile = document.getElementById('menu-mobile')
const cart = document.getElementById('cart')
const cartBtn = document.getElementById('cart-btn')
const menuBtn = document.getElementById('menu-btn')
const overlay = document.getElementById('overlay')
const closeMenu = document.getElementById('close-menu')
const closeCart = document.getElementById('close-cart')


const toggleOverlay = () => {
    cart.classList.toggle('-right-full')
    cart.classList.toggle('right-0')
    overlay.classList.toggle('hidden')
}

const cartClose = document.getElementById('cart-close')


// menu.addEventListener('click', toggleOverlay)
overlay.addEventListener('click', toggleOverlay)
menuBtn.addEventListener('click', () => {
    overlay.classList.toggle('hidden')
    menuMobile.classList.remove('-left-full')
    menuMobile.classList.add('z-30')
})
cartBtn.addEventListener('click', () => {
    overlay.classList.toggle('hidden')
    menuMobile.classList.remove('-left-full')
    menuMobile.classList.add('z-30')
})

closeMenu.addEventListener('click', () => {
    overlay.classList.toggle('hidden')
    menuMobile.classList.toggle('-left-full')
    menuMobile.classList.toggle('z-30')
})
closeCart.addEventListener('click', () => {
    overlay.classList.toggle('hidden')
    menuMobile.classList.toggle('-left-full')
    menuMobile.classList.toggle('z-30')
})

window.addEventListener('scroll', () => {
    // Only trigger if overlay is visible (not hidden)
    if (!overlay.classList.contains('hidden')) {
        toggleOverlay()
    }
})

// cartClose.addEventListener('click', toggleOverlay)