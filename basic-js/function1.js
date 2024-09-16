//arrow function
// const arrow = () => {
//     console.log("arrow")
// }

// //classics or another function
// const hello = function () {
//     console.log("hello");
    
// }

// hello();
// //arrow function
// const arrow = () => {
//     console.log("arrow");
    
// }

// arrow();


//callbacks function

// function cube(r){
//     var res = r * r * r ;
//     return res;
    
// }

// function square(r){
//     var res = r * r;
//     return res;
    
    
// }
// function check(x, fun) {
//     const value = fun(x);
//     console.log(value);
    
// }

// check(10, square)



//square nth number question

// function square(r){
//     var res = r * r;
//     var tal = res;
//     return tal;
// }
// function check(x, fun){
//     const value = fun(x);
//     console.log(value);
    
// }
// check(10, square)

function square(r){
    var res = r * r;
    return res;
}
function check(a, b, c, fun){
    console.log(fun(a));
    console.log(fun(a * a));
    console.log(fun());
    
}

check(2, 4, 6, square)

