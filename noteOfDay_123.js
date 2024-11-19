
//let, var, const
var x = 1;
document.write(x) // 1
var x = 2;
document.write(x) // 2
x = 9
document.write(x) // 9

var x1 = "duy"
let x2 = "nhat"
const isMonday = true

console.log("x1: " + x1 + ", x2: " + x2 + ", isMonday: " + isMonday) //x1: duy, x2: nhat, isMonday: true

{
    var x1 = "new duy"
    let x2 = "new nhat"
    const isMonday = false

    console.log("In Scope: x1: " + x1 + ", x2: " + x2 + ", isMonday: " + isMonday) // In Scope: x1: new duy, x2: new nhat, isMonday: false
}

console.log("Out Scope: x1: " + x1 + ", x2: " + x2 + ", isMonday: " + isMonday) // Out Scope: x1: new duy, x2: nhat, isMonday: true


//data type
var age = 21
var name = "Duy"
var isGAY = false
var info
var isNull = null

console.log(info) //undefined

var id = Symbol("id")
console.log(id) // Symbol(id)

num1 = 20
num2 = 5

console.log(num1 + num2) //25
console.log(num1 - num2) //15
console.log(num1 * num2) //100
console.log(num1 / num2) //4
console.log(num1 % num2) //0

console.log(num1++) //20
console.log(num1--) //21
num1 += 3
console.log(num1) //23
num2 -= 1
console.log(num2) //4



//Cấu Trúc Điều Khiển và Vòng Lặp

var tuoi = 15
console.log((tuoi >= 18) ? "Du? tuoi? di tu`!!" : "Di cai? tao.")


var thang = 3
switch (thang) {
    case 2:
        console.log("29ngay")
        break;
    case 3: case 5: case 9: case 11:
        console.log("30ngay")
        break;
    default:
        console.log("31ngay")
}


for (let i = 0; i < 5; i++) {
    console.log((i + 1))
}

// let tuoi2 = 0
// do {
//     tuoi2 = parseInt(window.prompt("Nhap so tuoi cua b: "))
//     if(tuoi2 < 18) alert("B ch du 18 tuoi! Vui long nhap lai")
// } while (tuoi2 < 18 )




