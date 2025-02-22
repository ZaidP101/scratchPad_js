// // Type 1

// const pro = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('ASYNC');
//         resolve()
//     },2000)
// })

// pro.then(function(){
//     console.log("second ASYNC")
// })


// -------------------------------------------------------------------------------------
// // Type 2
//  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("type 2");
//         resolve({'name': 'zaid', 'email' : 'zaid@gmail.com'})
//     },4000)
//  }).then(function(user){
//     console.log(user)
//  })


// -------------------------------------------------------------------------------------
// //  Type 3
// const PFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let value = true;
//         if(value){
//             resolve({'name': 'zaid', 'email' : 'zaid@gmail.com'})
//         }else{
//             reject('ERROR : something went wrong')
//         }
//     }, 6000)
// });


// PFour.then((user) => {
//     console.log(user)
//     return user.name;
// }).then((name) =>{
//     console.log(name)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=> {
//     console.log('Either the Promise is resolved or rejectd, the finally dilsplay what ever is given to it')
// })


// -------------------------------------------------------------------------------------
// ASYNC AWAIT
// const Pfive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let value = true;
//         if(value){
//             resolve({'name': 'zaid', 'email' : 'zaid@gmail.com'})
//         }else{
//             reject('ERROR : something went wrong')
//         }
//     }, 8000)
// });

// async function ASYNCtest() {
//     try {
//         const response = await Pfive;
//         console.log("user")
//     } catch (error) {
//         console.log(error)
//     }
// }
// ASYNCtest()


// -------------------------------------------------------------------------------------
//FETCH using try catch

// async function fetchTry() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log('ERROR', error)
//     }
// }

// fetchTry()


// -------------------------------------------------------------------------------------
//FETCH then catch

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//    return response.json();
// })
// .then((data) =>{
//     console.log(data)
// })
// .catch((error)=> {
//     console.log(error)
// })



// -------------------------------------------------------------------------------------

