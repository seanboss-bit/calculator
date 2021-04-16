/*let num1 = Number(prompt('Enter first number'))
let num2 = Number(prompt('Enter second number'))
let operator = prompt('Enter Operator')
let result;
if(operator === '+'){
    result = num1 + num2
    alert(`The additon of ${num1} is ${num2} is ${result}`)
}else if(operator === '-'){
    result = num1 - num2
    alert(`The subtraction of ${num1} is ${num2} is ${result}`)
}else if (operator === '*'){
    result = num1 * num2
    alert(`The multiplication of ${num1} is ${num2} is ${result}`)
}else{
    alert('Wrong Operator')
}*/

/*let name = 'Dele'
let password = '123456'
let user = prompt('Enter username')
let pass = prompt('Enter Passoword')

if(user === name){
    if(pass === password){
        alert(`welcome user ${name}`)
    }
}else{
    alert(`invalid Login Details`)
}*/

/*let age = Number
let facemask1 = 'yes'
let facemask2 = 'no'
let face = prompt('Are you Wearing A face mask')
let age1 = prompt('Enter Age')
const name = 'Jabi Lake Mall'
let allowed = 0
let rejected = 0

if( age1 >= 12){
    if(face === facemask1){
        allowed = allowed + 1
        alert(`Welcome to ${name}`)
    }
}else if( age1 < 12){
    if(face === facemask1){
        rejected = rejected + 1
        alert(`You Must Be 12 or Older To Enter ${name}`)
    }
}else(age1 > 12)
    if(face === facemask2){
        rejected = rejected + 1
        alert(`You Have Been Denied Entry Into ${name}`)
    }
    console.log(`rejected ${rejected}`)
    console.log(`allowed ${allowed}`)
*/
// for(let i = 0; i <= 5; i++){
//     console.log(`I is ${i}`)
// }

// let classroom = ['Faith', 'Okeke', 'Sean', 'Obinna', 'Law', 'Ayormide']
// let classroom2 = ['John', 'Ella']
// let JoinedClass = classroom.concat(classroom2)
// console.log(JoinedClass);

//OBJECT
// const Nigeria = {
//     state: 32,
//     President: 'Buhari',
//     LGA: 774,
//     isInAfrica: true,
// };
// Nigeria.goodroads = false;
// console.log(Nigeria);

/*const users = [
    {
        userName: 'user1',
        password: '1234567890',
        name: 'John Doe'
    },
    {
        userName: 'user2',
        password: '1234567890',
        name: 'Jane Doe'
    },
    {
        userName: 'user3',
        password: '1234567890',
        name: 'Sean Doe'
    },
    {
        userName: 'user4',
        password: '1234567890',
        name: 'Law Doe'
    },
];

const username = prompt('Enter Username')
const Pass = prompt('Enter Password')

const validateUser = users.filter((user) =>{
    return username === user.userName && Pass === user.password;
});

if(validateUser.length < 1){
    alert('Wrong credentials or Not Registered') 
} else{
    alert(`Welcome ${validateUser[0].name} to your Dashboard`)
}*/


//Function Declaration

/*function Hello() {
    console.log('Hello World');
}
Hello()

// Function Expression

const sayBye = function (){
    console.log('Say Bye');
}
sayBye()*/


//single Argument

/*const yourStatus = function(status){
    console.log(status);
}

const userStatus = prompt('Enter Your Status')

yourStatus(userStatus)*/

//Multiple Argument
/*const sum = function (sum1, sum2) {
    let sumUp = Number(sum1) + Number(sum2)
    alert(sumUp)
}
const sumOne = prompt('Enter First Number')
const sumTwo = prompt('Enter Second Number')

sum(sumOne, sumTwo)*/

/*function check(a, b){
    if(a > 20 || b > 20){
        return console.log('This is to Big')
    }
    return a * b
}

const a = prompt('Enter 1')
const b = prompt('Enter 2')

const result = check(a, b)

console.log(result);*/

// Method
/*const car = {
    brand: null,
    color: 'Blue',
    model: 'NK-T6',
    speed: function (carBrand) {
        if(carBrand == 'toyota'){
            this.brand = carBrand
            this.speed = '1000km'
        }else if(carBrand == 'honda'){
            this.brand = carBrand
            this.speed = '700km'
        }else{
            this.brand = 'others'
            this.speed = '500km'
        }
    }
}

let carBrand = prompt('Enter Car Brand')

car.speed(carBrand)
console.log(car);*/

//DOM MANIPULATION BEGINS


/*let itemInput = document.getElementById('input')
const itemButton = document.getElementById('button')
const list = document.querySelector('ul')

itemButton.addEventListener('click', () =>{
    //form Validation
    if(itemInput.value.length > 0){
        const newLi = document.createElement('li')
        const item = document.createTextNode(itemInput.value)
        newLi.appendChild(item)
        list.appendChild(newLi)
        itemInput.value = null
    }else{
        alert("Please Enter an Item")
    }
})*/

let firstNum = document.querySelector('.num1')
let secondNum = document.querySelector('.num2')
const addBtn = document.querySelector('.addbtn')
const mulBtn = document.querySelector('.mulbtn')
const subBtn = document.querySelector('.subbtn')
let answer = document.getElementById('output')


addBtn.addEventListener('click', () =>{
   const sum = Number(firstNum.value) + Number(secondNum.value)
   const result = document.createElement('p')
   const res = document.createTextNode(sum)
   result.appendChild(res)
   answer.appendChild(result)
   firstNum.value = null
   secondNum.value = null
})
mulBtn.addEventListener('click', () =>{
    const sum = Number(firstNum.value) * Number(secondNum.value)
    const result = document.createElement('p')
    const res = document.createTextNode(sum)
    result.appendChild(res)
    answer.appendChild(result)
    firstNum.value = null
    secondNum.value = null
})
subBtn.addEventListener('click', () =>{
    const sum = Number(firstNum.value) - Number(secondNum.value)
    const result = document.createElement('p')
    const res = document.createTextNode(sum)
    result.appendChild(res)
    answer.appendChild(result)
    firstNum.value = null
    secondNum.value = null
})

