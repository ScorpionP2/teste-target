function invString(char) {
    let novaString = '';
    for (let x = char.length - 1; x>= 0; x--) {
      novaString += char[x];
    }
    return novaString;
  }
  const exemplo = "Pronto";
  const Invertida = invString(exemplo);
  console.log(Invertida);