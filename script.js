const time = 2000
     currentImageIndex = 0
     images = document.querySelectorAll("#images img")
     max = images.length

function nextImage() {
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max){
        currentImageIndex = 0
    }

    images[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)

//Imagens alterada pelo usuário
document.querySelector("span.next").addEventListener("click", next)
document.querySelector("span.previous").addEventListener("click", previous)

const image = document.querySelectorAll("#images-slider img")
        maxImage = image.length
let imageIndex = 0

//Next image
function next() {
    image[imageIndex].classList.remove("selectedd")
    
    imageIndex++

    if(imageIndex >= maxImage){
        imageIndex = 0
    }

    image[imageIndex].classList.add("selectedd")
}

//Previous image
let currentIndex = 3

function previous() {
    image[currentIndex].classList.remove("selectedd")

    currentIndex--

    if(currentIndex < 0){
        currentIndex = 3
    }

    image[currentIndex].classList.add("selectedd")
}
