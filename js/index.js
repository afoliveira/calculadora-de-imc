
function iniciarCalculo() {
  //pega o valor do input altura
  let altura = document.getElementById("height").value.replace(",",".");
  altura = parseFloat(altura);
  
  // pega o valor do input da massa e transforma a 
  let massa = document.getElementById("kilogram").value.replace(",",".");
  massa = parseFloat(massa);

  // Executa o calculo do IMC e joga o resultado no váriavel totalIMC
  totalImc = calcularImc(altura,massa)

  // Joga o valor do totalImc dentro do input IMC
  document.getElementById("imc").value = totalImc.toFixed(2).replace(".",",");

  mostrarMensagemPeso(totalImc);
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

function mostrarMensagemPeso(imc) {
  const divCalculator = document.querySelector('.calculator')
  let msg = ''

  if(imc < 18.5) {
    msg = document.createElement('p');
    msg.setAttribute('class', 'type-of-mass')
    msg.innerHTML= 'Menor que 18.5: Magreza';
    divCalculator.appendChild(msg);

  } else if ( imc > 18.5 && imc < 24.9) {
    msg = document.createElement('p');
    msg.setAttribute('class', 'type-of-mass')
    msg.innerHTML= 'Entre 18,5 E 24,9: Normal';
    divCalculator.appendChild(msg);

  } else if(imc > 25 && imc < 29.9) {
    msg = document.createElement('p');
    msg.setAttribute('class', 'type-of-mass')
    msg.innerHTML= 'Entre 25,0 E 29,9: Sobrepeso';
    divCalculator.appendChild(msg);

  } else if(imc > 30 && imc < 39.9) {
    msg = document.createElement('p');
    msg.setAttribute('class', 'type-of-mass')
    msg.innerHTML= 'Entre 30,0 E 39,9: Obesidade';
    divCalculator.appendChild(msg);

  } else if(imc > 40) {
    msg = document.createElement('p');
    msg.setAttribute('class', 'type-of-mass')
    msg.innerHTML= 'Maior que 40,0: Obesidade Grave';
    divCalculator.appendChild(msg);
  }
}