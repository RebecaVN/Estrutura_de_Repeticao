var valorInicial = parseFloat(prompt("Digite o valor inicial do investimento:"));
var depositoMensal = parseFloat(prompt("Digite o valor do depósito mensal:"));
var taxa = parseFloat(prompt("Digite a taxa de juros mensal:"));

while (true) {
  var valorFinal = valorInicial;
  for (var i = 0; i < 12; i++) {
    valorFinal *= ( 1 + taxa / 100);
    valorFinal += depositoMensal;
    console.log(`Mês ${i}: R$ ${valorFinal.toFixed(2)}`);
  }

  if (valorFinal >= valorInicial * 2) {
    alert("O investimento dobrará em " + i + " meses");
 
  }
   var continuar = prompt("O investimento ainda não dobrou. Deseja continuar a simulação por mais um ano? (S/N)");
  if (continuar.toLowerCase() === "N") {
    break;
  }
}