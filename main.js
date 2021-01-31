'use strict'

var isPrime = require('./isPrime');

for (var i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i)
    }
}