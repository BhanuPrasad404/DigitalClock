function fun() {

    let time = new Date()
    let day = time.getDay()

    switch (day) {
        case 0: day = 'sunday'
            break
        case 1: day = 'monday'
            break
        case 2: day = 'tuesday'
            break
        case 3: day = 'wednesday'
            break
        case 4: day = 'thursday'
            break
        case 5: day = 'friday'
            break
        case 6: day = 'saturday'
            break
    }

    document.getElementById("h1").innerHTML= day
    let date = time.getDate()
    let month = time.getMonth()
    let year = time.getFullYear()

    switch (month) {

        case 0: month = 'january'
            break
        case 1: month = 'February'
            break
        case 2: month = 'March'
            break
        case 3: month = 'April'
            break
        case 4: month = 'May'
            break
        case 5: month = 'June'
            break
        case 6: month = 'July'
            break
        case 7: month = 'August'
            break
        case 8: month = 'September'
            break
        case 9: month = 'October'
            break
        case 10: month = 'November'
            break
        case 11: month = 'December'
            break

    }

    let full = date+ '-'+month+'-'+'-'+year

    document.getElementById("h2").innerHTML = full

    let hours=time.getHours()
    let minutes=time.getMinutes()
    let seconds=time.getSeconds()

    let ampm=''
    if(hours>12)
    {
        ampm="PM"
    }
    else
    {
        ampm="AM"
    }

    let x=hours+" :"+minutes+":"+seconds +"  "+ampm
    document.getElementById("h3").innerHTML=x

    setTimeout(function(){fun(),1000})

}
