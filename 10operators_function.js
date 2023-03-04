// Logical operators
// And Operator
console.log('And operator')
console.log(true && true)
console.log(true && false)
console.log(false && false)
console.log(false && true)

// Or operator
console.log('Or Operator')
console.log(true || true)
console.log(true || false)
console.log(false || false)
console.log(false || true)

// Not operator
console.log('Not operator')
console.log(!false)
console.log(!true)
console.log(4!=6)
console.log(4!=4)

// Functions 
function percent(a,b){
    return (a/b)*100;
}
console.log(percent(70,100))

//Conditional statemnets
function club(a){
    if (a<18){
        console.log("You can't go to club, you are less than 18")
    }
    else if (a==18){
        console.log('you are 18,can go inside with adult only')
    }
    else if (a<=24){
        console.log('You are above 18, less than 24, show ID and carry on')
    }
    else if (a<=41){
        console.log('welcome to the Club')
    }
    else if (a>50){
        console.log('you are above 50,not allowed')
    }
    else{
        console.log('Error')
    }
}

console.log(club(3))
console.log(club(18))
console.log(club(22))
console.log(club(24))
console.log(club(25))
console.log(club(40))
console.log(club(55))