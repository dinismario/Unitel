
// var nome ="dinis mario";
// var idade =19;

// // alert(`Ola Mundo , Seja bem vindo ao Portal da Unitel \n Nome: ${nome} \n idade: ${idade}`);

// if(idade>=18){

//     document.write(`A sua idade é ${idade} anos podes votar <br> <br>`);

// }else{

//     document.write(`A sua idade é ${idade} anos não podes votar <br><br>`);

// }

// for(let i = 1; i <= 12; i++){

//     const resultado = 7*i;

//     document.write(`7 x ${i} = ${resultado}<br>`); 
// }


const botao = document.getElementById('botao');

const resultado= document.getElementById('resultado');

let contador = 0;

botao.addEventListener('click', function(){
    
          contador++;

          if(contador==1){
            resultado.textContent =`Você clicou ${contador} vez `;

 }

 else{

    resultado.textContent =`Você clicou ${contador} vez `;
 }

});