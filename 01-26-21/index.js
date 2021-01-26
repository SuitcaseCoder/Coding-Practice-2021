//     **CHALLENGE ONE**
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
//  good question from codeSignal

// THE RESULT

function centuryFromYear(year) {
    
    // if year is divisible by 100 without any remainders, then return that year divided by 100
    // so if 1900  is divisible with 100 with no remainders --> 1900/100 = 19 
    // then return that result => 19 so 19th century
    if(year % 100 == 0){
        return year/100
    } else {
        // but if it's not easily divisible by 100 then return that number plus 1
        return parseInt(year/100) +1
    }

}


//      ** CHALLENGE TWO **
// Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
    let reverse = inputString.split('').reverse().join('');
    if(reverse == inputString){
        return true
    } else {
        return false
    }
}


//      ** CHALLENGE THREE **
