function  exercicioum(numbers) {

    var numeros = [];

      for (let i = 0; i < numbers.length; i +=2) {
        numeros.push(parseInt(numbers.substr(i, i+1)))
      }
      
      return maior.toString() + ' ' + menor.toString()
 
}
function exerciciodois(str) {     
    var direita = [];
    for(var i = 0; i<str.length; i++){      
        direita.unshift(str.charAt(i)); 
        }
        console.log(direita);
    var esquerda = [];
    for (var j=str.length-1; j>=0; j--){
        esquerda.push(str.charAt(j));
    }
        console.log(esquerda);
        };