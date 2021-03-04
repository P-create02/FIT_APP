const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')


function countDown(){
    let date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()


    // DAYS
    if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
        days.innerHTML = `${31 - day}`
    }
    else if(month === 4 || month === 6 || month === 9 || month === 11){
        days.innerHTML = `${30 - day}`
    }
    else{
        if(year % 4 === 0) days.innerHTML = `${29 - day}`
        else days.innerHTML = `${28 - day}`
    }

    // HOURS
    hours.innerHTML = `${24 - (hour + 1)}`

    // MINUTES
    minutes.innerHTML = `${60 - (minute + 1)}`
}


let count = setInterval(countDown, 1000)
countDown()


const year = document.querySelector('.year')
year.textContent = new Date().getFullYear()