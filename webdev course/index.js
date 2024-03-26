function leapYear(year) {
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return 'is a leap year'
    } else {
        return 'Not a leap year'
    }
}

window.alert(leapYear(2000))