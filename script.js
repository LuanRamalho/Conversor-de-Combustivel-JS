function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const unidadeOrigem = document.getElementById('unidadeOrigem').value;
    const unidadeDestino = document.getElementById('unidadeDestino').value;

    let resultado;

    if (unidadeOrigem === 'litro' && unidadeDestino === 'galao') {
        resultado = valor * 0.26417;
    } else if (unidadeOrigem === 'galao' && unidadeDestino === 'litro') {
        resultado = valor * 3.78541;
    } else {
        resultado = valor; // Se as unidades forem iguais, retorna o valor original
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(2)}`;
}
