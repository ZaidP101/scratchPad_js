// a = 22.3;
// console.log(a+11)

// console.log(aws)
// console.log("printQ")
// console.log('printQ')



// a = 12.3;
// b =33;
// c = "abc";
// d = true;
// e = 'aaa'

// console.log(a, typeof a)
// console.log(b, typeof b)
// console.log(c, typeof(c))
// console.log(d, typeof(d))
// console.log(e, typeof(e))



// rating = 3;

// if(rating==1) console.log("bad");
// else if(rating==2) console.log("average");
// else console.log("good");

// x = 45;
// if(x>=100 && x<=999) console.log("3 digit");
//     else console.log("not a 3 digit number");

// a = 2;
// b = '2';

// console.log(a==b);
// console.log(a===b);

// ///////// Loops //////// //

// for(i=1;i<=10;i++){
//     console.log(i);
// }

// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// arr = [1,2,3,4,5,6,7,8,11,23,49,56];
// n = arr.length;
// for(i=0;i<=n;i++){
//     console.log(arr[i]);
// }

// arr = [1,2,3,4,5,6,7,8,11,23,49,56]
// console.log(arr);
// arr.push(36);
// console.log(arr);
// arr.pop(36);
// console.log(arr);
// arr.unshift(66); // insert from front
// console.log(arr);
// arr.shift(); // remove first element
// console.log(arr);
// arr[0] = 77; //index 0 was 1 replaced by 77 
// console.log(arr);

// let arr = [1, "Linux", 3.34, true, [11,22,33,"AWS"]];
// for(let i = 0;i < arr.length; i++) {
//     console.log(i, arr[i]);
// }

// let x = {
//     name: zaid,
//     age: 22,
//     country: "india",
//     city: mumbai
// };

// for (const key in x) {
//     if (Object.hasOwnProperty.call(x, key)) {
//        console.log(key, x[key]);
        
//     }
// }

// let x = {
//     name: "zaid",
//     age: 22,
//     country: "india",
//     city: "mumbai"
// };

// for (const key in x) {
//     if (x.hasOwnProperty(key)) {
//         console.log(x[key]);
//     }
// }


// ////////// Functions ////////// //

// function toN(n){
//     for(let i=1;i<=n;i++){
//         console.log(i);
//     }
// }

// toN(6);

// console.log(Math.abs(-77));
// console.log(Math.min(-77,-66));
// console.log(Math.max(-77,1));
// console.log(Math.pow(2,4));         // 2 raise to 4
// console.log(Math.sqrt(625));       // square root
// console.log(Math.cbrt(8));        // cube root
// console.log(Math.log10(10));       // log 10 to the base 10 = 1
// console.log(Math.floor(12.2));     // round down
// console.log(Math.ceil(12.2));     // round up
// console.log(Math.floor((Math.random()*10)));    //// randon number betweent 0-9

// function pro(a,b,c){
//     return a*b*c;
// }

// // console.log(pro(2,4,5));

// function qro(x,y){
//     console.log(x-y);
// }

// qro(pro(2,4,5), 20);

// ///// call back function ///// //

// function pro(a,b,c){
//     return a*b*c;
// }

// function tro(x,y){
//     let a = x(2,3,5);
//     console.log(a-y);
// }

// tro(pro,20);

// ////////// setTimeout Function ///////// //

// for(let i=1;i<=10;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000)

// }

// let arr = [2,4,16,256];
// console.log(arr);
// let brr = [];
// for (const i of arr) {
//     brr.push(i*i);
// }
// console.log(brr);


// let arr = [2,4,16,256];
// console.log(arr);
// let brr = arr.map(function(ele){
//     return ele*ele;
// })

// function fun(ele){
//     if(ele%2!=0) return true;
//     else return false;
// }

let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);

// brr = arr.filter(fun);
// console.log(brr);


// arr = arr.sort(); // ascending
// console.log(arr);

arr = arr.sort(function(a,b){
    return b-a;
});
console.log(arr);