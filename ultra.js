let n = 2

const imageArea = document.querySelector('.ressonancia-img')
const newImg = document.createElement('img')
newImg.src = './ultrassom/0002.jpg'
imageArea.appendChild(newImg)

document.addEventListener('keydown', e => {
    if (e.key == "ArrowRight") {
        n++
        if (n > 7) {
            return n = 7
        }
        console.log(n)
        newImg.src = `./ultrassom/000${n}.jpg`
    } else if (e.key == "ArrowLeft") {
        n--
        if (n < 2) {
            return n = 2
        }
        newImg.src = `./ultrassom/000${n}.jpg`
    }
})

const forwardButton = document.querySelector('.forward')
forwardButton.addEventListener('click', e => {
    n++ 
    if (n > 7) {
        return n = 7
    }
    newImg.src = `./ultrassom/000${n}.jpg`
})

const backwardsButton = document.querySelector('.backwards')
backwardsButton.addEventListener('click', e => {
    n--
    if (n < 2) {
        return n = 2
    }
    newImg.src = `./ultrassom/000${n}.jpg`
})