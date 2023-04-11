var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(Event){
      Event.preventDefault();

   var form = document.querySelector("#form-adiciona");

   //EXTRAINDO INFORMAÇOES DO PACIENTE DO FORM
        var paciente = obtemPacienteDoFormulario(form);

  
   // CRIA A TR E TD DO PACIENTE

   var pacienteTr = montaTr(paciente);


  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome.value;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imc.textContent = calculaImc(peso,altura);


  // ADICIONANDO O PACIENTE NA TABELA 
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset ();
 // console.log('tabela -> ' + tabela.tagName);
});

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        Imc: calculaImc(form.peso.value, form.peso.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
   
    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
