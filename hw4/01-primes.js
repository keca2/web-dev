const getPrimes = () => {
  // Add your code here
  const primes = [];
  for (var val = 2; val < 101; val++)
  {
    var prime = true;
    for (var i = 2; i < val; i++)
    {
      if (val % i == 0)
      {
        prime = false;
        break;
      }
    }
    if(prime)
      primes.push(val);
  }

  primes.forEach(element => {
    console.log(element + '\n')
  });
};

getPrimes();
// 2
// 3
// 5
// 7
// 11
// 13
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// ...
