// let f1 =  function(){
//     var n=999;
//     return function f2(){
//         console.log(n++)
//     }
// }
//
// let a = f1()
//
//
// a()
// a()
// a()
//
//
// console.log('ok')
//
// class A{
//     aa = 1
//     #b = 2
//     constructor () {
//     }
//
//     run() {
//         console.log(this.#b)
//     }
// }
// a = new A()
// console.log(a.aa)
// //
// // let f1 = function (){
// //     let n=99
// //     setInterval(() => {
// //         console.log('d')
// //     })
// // }
// //
// // f1()
// //
// // f1 = null


function fun() {
    console.log(arguments)
    // arr.push('a')
}

const arr = [1,2]

fun(arr)
console.log(arr)

// function bar(a) {
//     function a() {}
//    a = a+ 1
//     console.log(a)
// }
//
// const a = 1
//
// bar(a)
// console.log(a)
