//alert("hi there")

// number
// 0.05 is float
// 2 is an int

//string

"Hello"
"1000"

//boolean
//true or false





let up = 10
var down = 15


console.log(up + down)

let firstName = "Yomi"
const last_name = "Ajagbandi"

let fullname = firstName + " " + last_name


console.log(fullname)

up = 20
console.log("up is now:", up)

// last_name= "new name"

// const happy = confirm("Are you happy?")

// if(happy){
//     alert("we are happy")
// }else{
//     alert("Baba please don't cry")
// }

// const password = prompt("enter pin")

// let balance = 5000

// const withdrawal = parseInt(prompt("How much would you like to withdraw"))

// if(password=="1234" && balance>=withdrawal){
//     alert('You have successfully withdrawn '+ withdrawal+"\n Your new balance is " + (balance-withdrawal))
// } else{
//     alert("you broke die o lmao! or you sabi your pin again")
// }

// if(password=="1234"){
//     alert("welcome to wayo bank")
//     const withdrawal = parseInt(prompt("How much would you like to withdraw"))
//     if(balance>=withdrawal){
//         alert('You have successfully withdrawn '+ withdrawal+"\n Your new balance is " + (balance-withdrawal))
//         } else{
//             alert("you broke die o lmao! or you sabi your pin again")
//         }
// }else{
//     alert("you nio sabi password abi you wan tif")
// }

// let num = parseInt(prompt('Enter a number'))


// if(num %2===0){
//     alert(num+ " is even")
// }else{
//     alert(num + " is odd")
// }

// const age = parseInt(prompt("enter your age:"))

// if(age < 12){
//     alert("Wait a lil bit, you're still young")
// }else if(age >=12 && age < 16){
//     alert("You are in the fresh teen")
// }else if(age >=16 && age < 18){
//     alert("You are in the grown teen")
// }else if(age >=18 && age < 22){
//     alert("You are in the young adult level")
// }else if(age >=22 && age < 27){
//     alert("You are in the adult level")
// }else if(age >=27 && age <=30){
//     alert("You are in the working class level")
// }else{
//     alert("You are too grown for this")
// }

function hello(name = "User") {
    return "Hello " + name + "!!!"
}
const message = hello("Yomi")


// function isAnAdult(age){
//     if(age >= 18){
//         return true
//     }
//     if(age < 18){
//         return false
//     }
// }
// const person = parseInt(prompt("Enter your age:"))

// if(isAnAdult(person)){
//     alert("You are an adult")
// }else{
//     alert("You are not an adult")
// }


//initializing the bank app


let balance = 5000
const pin = "1234"

function bank() {
    const transaction = parseInt(prompt("What would you like to do? \n 1. Withdrawal \n 2. Deposit \n 3. Check Balance \n 4. Transfer \n 5. Airtime \n 6. Pay Bills"))

    switch (transaction) {
        case 1:
            alert("You have selected withdrawal")
            withdrawal()
            break
        case 2:
            alert("You have selected deposit")
            deposit()
            break
        case 3:
            alert("Your balance is " + balance)
            break
        case 4:
            alert("You have selected transfer")
            transfer()
            break
        default:
            alert("service not available, please try again later")
    }
}


function withdrawal() {
    const password = prompt("enter pin")

    if (password == pin) {
        alert("welcome to wayo bank")
        const withdrawal = parseInt(prompt("How much would you like to withdraw"))
        if (balance >= withdrawal) {
            alert('You have successfully withdrawn ' + withdrawal + "\n Your new balance is " + (balance - withdrawal))
        } else {
            alert("you broke die o lmao! or you sabi your pin again")
        }
    } else {
        alert("you nio sabi password abi you wan tif")

    }
}

function deposit() {
    const password = prompt("enter pin")

    if (password == pin) {
        alert("welcome to wayo bank")
        const deposit = parseInt(prompt("How much would you like to deposit"))
        balance += deposit
        alert('You have successfully deposited ' + deposit + "\n Your new balance is " + (balance))
    } else {
        alert("you no sabi password abi you wan tif")

    }
}


function transfer() {
    const password = prompt("enter pin")
}

const foodItems = ['Beans', 'Rices', "Fufu", 'Yam', 'Eba', 'Amala', 'Semovita', 'Pounded yam']

console.log(foodItems)

// add to an array
// foodItems.push("Gbegiri")
// foodItems.push("Ewedu")

foodItems.splice(2, 2, "Spaghetti", "Macaroni")



console.log(foodItems)

// foodItems.unshift("Garri")
// foodItems.unshift("Ekpa")
// const arr = ["john", 2100, true, "doe", 1000]

// console.log(foodItems)


// const newFoodItems = foodItems.slice(1, 4)

// console.log(newFoodItems)

const actor = {
    name: "Keanu Reeves",
    age: 56,
    networth: 360000000,
    movies: ["Matrix", "John Wick", "Speed", "Point Break"],
    message: function () {
        return `Hello,I am ${this.name}. The lead actor in ${this.movies[1]}. I turned ${this.age} last year.
        My networth is $${this.networth}
        `
    }
}

console.log(actor.message())

let i = 0
while (i < 1000) {
    if (i < 994) {
        console.log('I am sorry for my sins', i)
    } else {
        console.log('I am sorry for my sins, please accept my apology', i)
    }
    i++
}