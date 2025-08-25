function calcular() {
    let v1 = parseFloat(document.getElementById("n1").value); 
    let v2 = parseFloat(document.getElementById("n2").value);
    let operacao = document.getElementById("funcao").value;
    
    let resultado;
    
    if (operacao === "soma") {
        resultado = v1 + v2;
    } else if (operacao === "menos") {
        resultado = v1 - v2;
    } else if (operacao === "vezes") {
        resultado = v1 * v2;
    } else if (operacao === "dividir") {
        if (v2 === 0) {
            resultado = "Erro: divisão por zero";
        } else {
            resultado = v1 / v2;
        }
    }
    
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}