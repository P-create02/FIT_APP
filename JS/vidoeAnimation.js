const videoContainer = document.querySelector('.block-container')

function createDivs(){
    for(let j = 1; j <= 4; j++){
        for(let i = 1; i <= 5; i++){
            let divGrid = document.createElement('div')
            divGrid.setAttribute('class', `block c${j} r${i}`)
            videoContainer.appendChild(divGrid)
    
            if(j ===2) divGrid.style.top = "25%"
            if(j ===3) divGrid.style.top = "50%"
            if(j ===4) divGrid.style.top = "75%"

            if((i >= 2 && i <= 5)){
                divGrid.style.left = `${20 * (i - 1)}%`
            }
        }
    }
}

function animationDivs(){
    anime({
        targets: '.block',
        scale: [
            {value: .1, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(400, {grid: [5, 4], from: 'center'})
    });    
}

window.addEventListener('DOMContentLoaded', function(){
    createDivs()
    animationDivs()
})




// const blocks = document.querySelectorAll('.block')

// blocks.forEach(function(block){
//     block.addEventListener('DOMContentLoaded', function(){
//         setTimeout(() =>{
//             block.style.overflow = "hidden"
//         }, 1200)
//     })
// })