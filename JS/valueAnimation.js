const animeCust = document.querySelector('.anime-cust')
const animeKillos = document.querySelector('.anime-killos')
const animeMarr = document.querySelector('.anime-marr')

function valueCust(){
    setTimeout(function(){
        for(let i=0; i < 69409; i++){
                animeCust.textContent = i
        }
    }, 500)
}

function valueKillos(){
    setTimeout(function(){
        for(let i=0; i < 218467; i++){
                animeKillos.textContent = i
        }
    }, 750)
}

function valueMarr(){
    setTimeout(function(){
        for(let i=0; i < 9869; i++){
                animeMarr.textContent = i
        }
    }, 900)
}

window.addEventListener("scroll", function(){
    //   console.log(window.pageYOffset);
    if(window.pageYOffset >= 2400){
            valueCust()
            valueKillos()
            valueMarr()
    }
})