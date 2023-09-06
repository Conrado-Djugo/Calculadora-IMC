
const calcular = document.getElementById('calcular')


function calculando(){
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = document.getElementById('imc')
    const avimc = document.getElementById('avimc')
    
    if (peso !=='' && altura !== '') {
     
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let clacificacao = '';

        if (valorIMC <18.5){
            clacificacao = 'Você está abaixo do peso'
        }
        else if (valorIMC < 24.9){
            clacificacao = 'Você está com o peso idel. Parabens!!!'
        }
        else if (valorIMC < 29.9){
            clacificacao = 'Você está acima do peso'
        }
        else if (valorIMC < 34.9){
            clacificacao = 'Você está com obesidade grau 1'
        }
        else if (valorIMC < 39.9){
            clacificacao = 'Você está com obesidade grau 2'
        }
        else if (valorIMC >= 40){
            clacificacao = 'Você está com obesidade grau 3'
        }
        avimc.textContent = clacificacao
        imc.textContent = valorIMC
        
    }else{
        avimc.textContent = 'preencha todos os campos!!!'
    }

}
calcular.addEventListener('click', calculando)

