function Fibonacci(num) {
    let x = 0, y = 1;
  
    while (y <= num) {
      if (y === num) {
        return true; 
      }
      let temp = y;
      y = x + y;
      x = temp;
    }
    return false;
  }
  
  
  let numero = 13;// escreva o numero aqui
  if (Fibonacci(numero)) {
    console.log(numero + " pertence à sequência de fibonacci");
  } else {
    console.log(numero + " não pertence à sequência de fibonacci");
  }