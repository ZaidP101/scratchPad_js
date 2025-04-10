// const state = "maharashtra";
// let city = "mumbai"
// var station =  "Jogeshwari"
// road = "s.v"
// let country;
// city = "pune"
// station = "andheri"
// road = "vs"

// console.table([state, city, station, road, country]);
// console.log("zaid");


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let score = 33;
// console.log(typeof(score));

// let convert = Number(score);

// console.log(convert);

// let stringNumber = console.log(String(score));
// let typeNumber = console.log(typeof(String(score)));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const gameName = "zaid-24MCA-40"

// console.log(gameName.charAt(7));
// console.log(gameName.indexOf('-'))
// console.log(gameName.substring(2,7))

// const spaceTrim = "     zaid@gmail.com    ";
// console.log(spaceTrim)
// console.log(spaceTrim.trim()) 

// const url = 'http://zaid%20patel.com';
// console.log(url)
// console.log(url.replace('%20', '-'))
// console.log(url.includes("x"))
// console.log(gameName.split('-')) //to array

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const balance = Number(400000.232)
// console.log(balance)
// console.log(balance.toString())
// console.log(balance.toFixed())
// console.log(balance.toLocaleString())
// console.log(balance.toLocaleString('en-IN'))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const arr = [12,3,43,455, 7, 4]
// console.log(arr)
// const newArr = arr.join();
// console.log(newArr)
// console.log(typeof(newArr))


// const array = [0,1,2,3,4,5,6]
// console.log(array)
// const arr1 = array.slice(1,3)
// console.log(arr1)

// const arr2 = array.splice(1,3)
// console.log("array after slice", array)
// console.log(arr2)


// const clubP = ['MU', 'MC', 'arsnal','BM']
// const clubLL = ['RM','FCB', 'AM']

// console.log(clubP.push(clubLL))
// console.log(clubP)


// const spreadFunction = [...clubP, ...clubLL]
// console.log(spreadFunction)



// const nestedArr = [1,2,3,[4,5], 6, [7,8,[9,10,11]],12]
// console.log(nestedArr)
// console.log(nestedArr.flat(Infinity))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const user = [
//     {
//         name : 'zaid',
//         ID : '12321',
//         email : 'zaid@Gmail.com'
//     },
//     // {
//     //     name : 'naved',
//     //     ID : 112211,
//     //     email : 'naveed@Gmail.com'
//     // }
// ]
// console.log(user)
// console.log(Object.keys(user));
// console.log(Object.values(user));


// const club = {
//     name:'FCB',
//     league: 'laliga',
//     country: 'spain'
// }
// const {name} = club;
// console.log(name)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const playerArr = ['CR', 'LM', 'KB', 'GB']

// function accessPlayer(getArray){
//     return getArray[1]
// }
// console.log(accessPlayer(playerArr))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const user = {
//     name : 'zaid',
//     rNumber : '22',

//     greetings:  function(){
//         console.log(`${this.name}, welcome this refferes to the name, and here we have not hard coded, i.e. exe the func after changing the name possible`)
//     }
// }

// user.greetings()
// user.name = 'ali'
// user.greetings()


// const thisFunction = (temp)=>{
//     console.log(temp)
// }

// thisFunction(30)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Immediately Invoke Function Expression

// ((name) => {
//     console.log(`${name}, the first '()' is a finction and the last '()' is the exe of the function immediately`)
// })('zaaid')


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const map = new Map()

// map.set('IN', 'India')
// map.set('PAK', 'Pakistan')
// map.set('AFG', 'Afganistan')
// map.set('CHI', 'China')

// console.log(map)
// console.log("no duplicate values and order of insertion is maintained")



// const language = {
//     'js' : 'javaScript',
//     'c++': 'c plus plus',
//     'java': 'JAVA',
//     'py': 'python'
// }

// // for of loop for arrays
// // for in loop for objects 

// for (const key in language) {
//     console.log(`${key} <- is to get key and -> ${language[key]} is to get value`)
// }



// const language = ['JSON', 'jsvs', 'python']

// language.forEach( (items) => {
//     console.log(`${items} -----  here using call back funnctions, in such the finction has no name`) ;
// })




// const coding = [
//     {
//         language: 'JAVA',
//         fileType: '.java' 
//     },
//     {
//         language: 'javaScript',
//         fileType: '.js' 
//     },
//     {   language: 'C++',
//         fileType: '.cpp' 
//     }
// ]

// coding.forEach( (i) =>{
//     console.log(i.fileType)
// })


// FILTER
// const nums = [1,2,3,4,5,6,7,8,9]

// const myNums = nums.filter( (i) => i>4)
// console.log(myNums)


// MAP
// const MYnums = nums.map( (i) => i+10)
// console.log(    myNums)


// BOTH
// const nums = [1,2,3,4,5,6,7,8,9]
// const both = nums
//     .map( (i) => i *10)
//     .map( (i) => i +1 )
//     .filter( (i) => i >40)
// console.log(both)


//REDUCE

// const cart = [
//     {
//         name : 'Mouse',
//         price : 232
//     },
//     {
//         name : 'keyboard',
//         price : 3232
//     },
//     {
//         name : 'computer',
//         price : 4000
//     }
// ]

// const total = cart.reduce( (acc,i) => {
//     console.log(`acc value is ${acc}, and i that is item total value is ${i.price}`)
//     return acc + i.price
// },0
// )

// console.log(total)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OOP

// function user(name, count, id){
//     // constructor
//     this.name = name,
//     this.count = count,
//     this.id = id

//     return this
// }

// const userOne = new user('zaid', 11, 'zaid@gmail.com')
// const userTwo = new user('ali', 15, 'ali@gmail.com')
// const userThree = user('Naved', 12, 'naved@gmail.com')

// console.log(userOne)
// console.log(userTwo)
// console.log(userThree , "here the value will be overidden if not used 'new' in userOne , two and Three ")


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Call

// function setUser(userName){
//     this.userName = userName
//     console.log("called")
// }

// function createUser(userName, email, password){
//     // setUser(userName)
//     setUser.call(this, userName)
//     this.email= email
//     this.password = password
// }

// const userOne = new createUser("zaid", "zaid@gmail.com", 1234)
// console.log(userOne)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


