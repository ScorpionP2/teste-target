async function calcularFaturamento(arquivoJson) {
    try {
        const response = await fetch(arquivoJson);
        const data = await response.json();
        const faturamentoDiario = data.faturamento;// teste do arquivo json

//funcion
        const somaTotal = faturamentoDiario.reduce((total, valor) => total + valor, 0);
        const mediaMensal = somaTotal / faturamentoDiario.length;

        const menorValor = Math.min(...faturamentoDiario);
        const maiorValor = Math.max(...faturamentoDiario);

        const diasAcima = faturamentoDiario.filter(valor => valor > mediaMensal).length;

        return {
            menorValor,
            maiorValor,
            diasAcima,
            mediaMensal
        };
    } catch (error) {
        console.error('Erro ao processar os dados:', error);
        return null;
    }
}
//resultado
const arquivo = 'faturamento.json'; 
calcularFaturamento(arquivo)
    .then(resultado => {
        if (resultado) {
            console.log('Menor valor:', resultado.menorValor);
            console.log('Maior valor:', resultado.maiorValor);
            console.log('Dias acima da media:', resultado.diasAcima);
            console.log('Media mensal:', resultado.mediaMensal);
        }
    });