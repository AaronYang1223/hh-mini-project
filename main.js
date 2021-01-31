'use strict'

var isPrime = require('./src/isPrime');

for (var i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i)
    }
}