
let fact = n => n - 1 > 0 ? n * fact(n - 1) : n;
console.log(fact(3));