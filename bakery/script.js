// Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})
// End of Navbar

/*Section 1*/
/*
const images = document.querySelectorAll(".image-wrapper .image-bakery")
let i = 1

setInterval(() => {

    i++

    const image = document.querySelector(".image-wrapper .change")

    image.classList.remove("change")

    if(i > images.length) {
        images[0].classList.add("change")
        i = 1
    } else{
        image.nextElementSibling.classList.add("change")
    }

}, 5000);

console.log(image) */


const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}