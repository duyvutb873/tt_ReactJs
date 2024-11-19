let tuoi3

// tuoi3 = parseInt(window.prompt("Vui long nhap tuoi: "))
// alert(`ban  ${tuoi3} tuoi`)




for (var i = 1; i<=50; i++){
    console.log(i)
}

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
  
  let number = 29;
  if (isPrime(number)) {
    console.log(`${number} là số nguyên tố.`);
  } else {
    console.log(`${number} không phải là số nguyên tố.`);
  }
  