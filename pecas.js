const caixa = [];

function peca() {
  const nome = document.getElementById("nome").value;
  const peso = document.getElementById("peso").value;

  const mensagem = document.getElementById("mensagem");
  mensagem.innerHTML = "";

  if (peso <= 100) {
    mensagem.innerHTML =
      "<p class = 'Error'>A peça precisa ter um peso superior a 100 gramas</p>";
    return;
  }

  if(nome.length < 3){
    mensagem.innerHTML="<p class='Error'>O nome da peça precisa ter no mínimo 3 letras </p>";
    return;
  }

  if(caixa.length >= 10){
    mensagem.innerHTML="Caixa cheia - Não há espaço suficiente para cadastrar mais peças";
    return;
  }


  caixa.push({nome,peso});
  mensagem.innerHTML= "<p> Peça cadastrada </p>";

  console.log(caixa);
}
