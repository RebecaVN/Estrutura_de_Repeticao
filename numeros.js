//Script - Números
function checar(num){
    if(num===0){
        console.log("O número " + num + " é zero")
    }else if(num %2===0){
        console.log("O número " + num + " é par")
    }else{
        console.log("O número " + num + " é ímpar")
    }
}
var numAlunos= 30;

for( i = 0; i <=numAlunos; i++ ){
    checar(i);
}
