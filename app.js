// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];
// const array3 = [array1];

// console.log(array1)
// console.log(array3)


setTimeout(() => {
    console.log("racer 1 got forth position");
}, 5000);

setTimeout(() => {
    console.log("racer 2 got third position");
}, 4000);

setTimeout(() =>{
    console.log("racer 3 got second position");
}, 3000);

setTimeout(() =>{
    console.log("racer 4 got first position")
}, 1000);

// THERE ARE ASYNCRONOUS CODE

// setTimeout
// setInterval
// Promise
// fetch
// axios

// callbacks
// try catch
// async await


// promises
// if we have one promise if this will resolve means success we use .then() to proceed it further
// and if this reject means error comes in it then we will catch that error with the help of .catch()

// EXAMPLE OF PROMISE

let answer = new Promise ((resolve, reject) => {
     let success = true;

     if (success){
        resolve("success")
     } else{
        reject("fsiled ")
     }
});


function Car (color, model, year){
    this.color = color;
    this.model = model;
    this.year = year;
    this.start = function(){
       return this.model + "has started";
    }
}

let car1 = new Car ("black", "bugatti", 2025);
let car2 = new Car ("silver", "honda", 2023);
let car3 = new Car ("white", "toyota", 2020);

console.log(car1.start())
console.table([car1, car2, car3])


function Person(name, age){
    this.name= name;
    this.age = age;
    this.going = function(){
        return this.name + " " + "is going to office";
    }
}

let Person1 = new Person("shoaib", 23)
let Person2 = new Person("irfan", 21)
let Person3 = new Person("kamran", 20)

console.log(Person1.going())


let person = {
    name: "shoaib",
    age: 23,
    email : "shoaib@gmail.com",
    location: "peshawar",
    going: function(){
        return + " " + "is going to europe";
    }
}
console.log(person.name())
console.log(person.email)
console.log(person.location)
person.age= 25;
console.log(person.age)
console.log()