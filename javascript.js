var numeroSecreto = parseInt(Math.random()*1001); //gerando numero inteiro aleatorio
var numeroTentativas = 0;

alert('Adivinhe o número secreto.');
alert('Número de tentativas: 10');

while(numeroTentativas < 10) 
      {
        
        numeroTentativas = numeroTentativas + 1; //contador de tentativas
        
        var tentativa = prompt('Digite um número entre 1 e 1000: '); //atribui o valor digitado no           prompt na variavel 'tentativa 

        if(tentativa < 1 || tentativa >         1000)
        
        var tentativa = prompt('Número inválido. Digite novamente: ');

        if(tentativa == numeroSecreto)
          alert('Parabéns! Acertou, o número secreto é ' + numeroSecreto + '.');

        else
          {
            if(tentativa > numeroSecreto)
              {
                alert('O número secreto é menor que ' + tentativa +'.');  
              }

            if(tentativa < numeroSecreto)
              {
                alert('O número secreto é maior que ' + tentativa + '.')
              }
        }
}