
////

var numbers = [1, 2, 3, 4, 5, 6]

function sum(...arr) {
    var sum = 0
    for (var i of arr)  {
        sum += i
    }
    return sum
}
console.log(sum(...numbers))


////


const arr1 = [2, 3, 4]

const result1 = arr1.map(num => {
    return num * num
})
console.log(`result1 : ${result1.join("/")}`)


//// 

const arr2 = [1,2,3,4,5,6,7,8,9,56,43,23,23,11]

const result2 = arr2.filter(num => 
    num % 2 == 0
);
console.log(`result2 : ${result2}`)