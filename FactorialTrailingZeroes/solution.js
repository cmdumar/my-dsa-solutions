function trailingZeroesInAFactorial(num) {
    let factorial = 1;
    let counter = 0;

    for (let i = num; i > 0; i--) {
     factorial *= i; 
    }

    while (result % 10 === 0) {
      counter += 1;
      factorial = factorial / 10;
    }

    console.log(counter);
}

trailingZeroesInAFactorial(10) // Outputs 2