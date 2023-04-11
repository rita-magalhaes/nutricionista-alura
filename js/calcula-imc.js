var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
var numeroPacientes = pacientes.length;

for(var i = 0; i < numeroPacientes; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    
    var pesoValido = true;
    var alturaValida = true;

    var tdImc = paciente.querySelector(".info-imc");
      
    if(peso <= 0 || peso >= 300) {
        console.log('Peso inválido!');
        pesoValido = false;

        tdImc.textContent = 'Peso inválido!';
        paciente.classList.add("paciente-invalido");
        
    }
    
    if(altura <=  0 || altura >= 3.00) {
        console.log('Altura inválida!');
        alturaValida = false;

        tdImc.textContent = 'Altura inválida!';
        paciente.classList.add("paciente-invalido");
    }
    
    if(pesoValido && alturaValida) {
        var imc = calculaImc (altura * altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
