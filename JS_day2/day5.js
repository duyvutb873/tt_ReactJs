////

const string1 = "Hello, World";

var string1_reve = (string) => {
    return string.split("").reverse().join("");
} 

console.log(`String_rev: ${string1_reve(string1)}`)


////
 const string2 = "mam"

 var string2_palin = (string) => {
    const cleanedString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    const reversedString = cleanedString.split('').reverse().join('');
    
    return cleanedString === reversedString;
 }

 console.log(`string2_palin: ${string2_palin(string2)}`)


 /////
 var sv1 = {
    ten: "Duy",
    tuoi: 22
 }

 console.log(`Name: ${sv1.ten}, Age: ${sv1.tuoi}`)

 ////

 function solveQuadratic(a, b, c) {
    if (a === 0) {
        if (b === 0) {
            return c === 0 ? "Phương trình vô số nghiệm." : "Phương trình vô nghiệm.";
        } else {
            const x = -c / b;
            return `Phương trình có một nghiệm: x = ${x}`;
        }
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        return "Phương trình vô nghiệm.";
    } else if (delta === 0) {
        const x = -b / (2 * a);
        return `Phương trình có nghiệm kép: x = ${x}`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    }
}

const a = 1, b = -3, c = 2;
console.log(solveQuadratic(a, b, c));



