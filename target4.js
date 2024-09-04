const faturaMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const totalFat = Object.values(faturaMensal).reduce((x, y) => x + y, 0);

for (const estado in faturaMensal) {
  const percentual = (faturaMensal[estado] / totalFat) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);//diminuir casas decimais com to fixed depois
}
