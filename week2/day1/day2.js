///
function createCounter(fn) {
    let count = 0; 

    return function(...args) {
        count++; 
        console.log(`Hàm đã được gọi ${count} lần.`);
        return fn(...args); //
    };
}

// Ví dụ sử dụng
function sayHello(name) {
    return `Xin chào, ${name}!`;
}

const countedSayHello = createCounter(sayHello);

console.log(countedSayHello("Alice")); 
console.log(countedSayHello("Bob"));  
console.log(countedSayHello("Charlie"));


//


function createValueStore(initialValue) {
    let value = initialValue; 

    return {
        getValue: function() {
            return value; 
        },
        setValue: function(newValue) {
            value = newValue; 
        }
    };
}

//vidu
const store = createValueStore(10);

console.log(store.getValue()); // 10
store.setValue(20);
console.log(store.getValue()); // 20
store.setValue(50);
console.log(store.getValue()); // 50
