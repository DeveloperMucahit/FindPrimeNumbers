// First Challenge: Write a function that takes a number and returns the nearest prime number that is smaller or larger than the input number.
// Example:
// 100 => 101

function isPrime(num){
    if(num <=1) return false;
    for(let i = 2; i <= num / 2; i++){
        if(num % i === 0) return false;
    }
    return true;
}

function neraestPrime(num){
    let lower = num;
    let upper = num;

    while(!isPrime(lower)){
        lower--;
    }

    while(!isPrime(upper)){
        upper++;
    }

    if(num - lower <= upper - num)
        return lower;
    else 
        return upper;
}

console.log('En Yakın Asal Sayı= ' + neraestPrime(100)); //  101
console.log('En Yakın Asal Sayı= ' +neraestPrime(99));  //  97


// Second Challenge: Write a function that takes a number and returns the sum of the nearest two prime numbers.
// Example: 
// 100 => 198
function sumOfNearestPrimes(num) {
    let lower = num;
    let upper = num;
  
    while (!isPrime(lower)) {
      lower--;
    }

    while (!isPrime(upper)) {
      upper++;
    }

    return lower + upper;
  }


console.log('En Yakın Asal Sayıların Toplamı= ' + sumOfNearestPrimes(100)); //  198
console.log('En Yakın Asal Sayıların Toplamı= ' + sumOfNearestPrimes(99));  //  198