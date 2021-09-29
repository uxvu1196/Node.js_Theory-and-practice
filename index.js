let importedArr = require("./data")
console.log("requiredString", require("./data"))
console.log("importedArr", importedArr)

console.log("hello world!")
for (let index = 0; index < 3; index++) {
    console.log(index)
}

//module: export Import in Node.js
//install some Package 

let data1 = require("./data1") //object
console.log(data1)
console.log(data1.textExported)
console.log(data1.cityExported)
console.log(data1.myKey)

let data2 = require("./data2")
console.log(data2)
console.log(data2.heroesKey)
console.log(data2.totalKey)


let logIn = require("./function.js")
console.log(logIn)
logIn("superman")

let myFunction = require("./function1.js")
console.log(myFunction);
myFunction.logOut("Batman")
myFunction.register("Aquaman")

console.log("Hey")

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U "
}));


const _ = require("lodash")

console.log(data1.cityExported)
console.log(_.sortBy(data1.cityExported))
console.log(_.uniq([2, 3, 2, 3, 2, 3, 2, 3]));

console.log("textest")