
function iniciarCalculo() {
  //pega o valor do input altura
  let altura = document.getElementById("height").value.replace(",",".");
  altura = parseFloat(altura);
  
  // pega o valor do input da massa
  let massa = document.getElementById("kilogram").value.replace(",",".");
  massa = parseFloat(massa);

  // Executa o calculo do IMC e joga o resultado no váriavel totalIMC
  totalImc = calcularImc(altura,massa)

  // Joga o valor do totalImc dentro do input IMC
  document.getElementById("imc").value = totalImc.toFixed(2);
  
}

// Função responsável por executar o calculo do IMC
function calcularImc(h,m) {
  return m / (h * h);
}

// Limpa os dados nos inputs
function limpar() {
  //pega o valor do input altura  e limpa o campo
  document.getElementById("height").value = '';
  // pega o valor do input da massa e limpa o campo
  document.getElementById("kilogram").value = '';
  // pega o valor do input do imc e limpa o campo
  document.getElementById("imc").value = '';
}
