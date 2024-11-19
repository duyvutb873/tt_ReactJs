function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function sum(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return 'Không thể chia cho 0';
    }
  }
  
  
  let number = 29; 
  if (isPrime(number)) {
    console.log(`${number} là số nguyên tố.`);
  } else {
    console.log(`${number} không phải là số nguyên tố.`);
  }
  


const student = {
    name: 'Nguyen Van A',
    age: 20,
    score: 8.5
  };
  
  
  function printStudentInfo(student) {
    console.log(`Tên: ${student.name}`);
    console.log(`Tuổi: ${student.age}`);
    console.log(`Điểm: ${student.score}`);
  }
  
  printStudentInfo(student);



  console.log(`Tổng của 5 và 3 là: ${sum(5, 3)}`);
console.log(`Hiệu của 5 và 3 là: ${subtract(5, 3)}`);
console.log(`Tích của 5 và 3 là: ${multiply(5, 3)}`);
console.log(`Thương của 5 và 3 là: ${divide(5, 3)}`);

// Test the sumAll function
console.log(`Tổng của các số 1, 2, 3, 4, 5 là: ${sumAll(1, 2, 3, 4, 5)}`);
