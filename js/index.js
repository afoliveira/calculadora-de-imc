
function iniciarCalculo() {
  //pega o valor do input altura
  let altura = document.getElementById("height").value.replace(",",".");
  altura = parseFloat(altura);
  
  // pega o valor do input da massa
  let massa = document.getElementById("kilogram").value.replace(",",".");
  massa = parseFloat(massa);

  // Executa o calculo do IMC e joga o resultado no váriavel totalIMC
  const totalImc = calcularImc(altura,massa)

  // Joga o valor do totalImc dentro do input IMC
  document.getElementById("imc").value = totalImc.toFixed(2);
  
  addFatPercentual(totalImc);
}

// Função responsável por executar o calculo do IMC
function calcularImc(h,m) {
  return m / (h * h);
}

// Limpa os dados nos inputs
function limpar() {
  //pega o valor do input altura  e limpa o campo
  document.querySelector("#height").value = '';
  // pega o valor do input da massa e limpa o campo
  document.querySelector("#kilogram").value = '';
  // pega o valor do input do imc e limpa o campo
  document.querySelector("#imc").value = '';
  // pega o texto dentro da classe  e limpa o campo
  document.querySelector(".fat-percentual").textContent = '';
}

function addFatPercentual(totalImc) {
  let divCalculatorImc = document.querySelector('.fat-percentual');
  let paragraph = '';

  if(totalImc < 18.5) {
    paragraph = 'Você está com Magreza, bora tomar uns NAN, comer melhor';
   } else if (totalImc > 18.5 && totalImc < 24.9) {
    paragraph = 'Você está com o indice Normal, boa jovem Padwan ';
  } else if (totalImc > 25 && totalImc < 29.9) {
    paragraph = 'Você está com Sobrepeso, abre o olho jovem';
  } else if (totalImc > 30 && totalImc < 39.9) {
    paragraph = 'Vocé está com Obesidade, bora tomar cuidado';
  } else if (totalImc > 40) {
    paragraph = 'Você está com Obesidade Grave, corre Berg';
  }
  return divCalculatorImc.innerText = paragraph;
}