
//função ativada quando o usuario clicar no botão adicionar convidado
function adicionarConvidado() {


    //pegar os valores
    var nome = document.getElementById('name').value;
    var data = document.getElementById('date').value;
    var horario = document.getElementById('time').value;
  
    
    if (nome === '' || data === '' || horario === '') {
      alert('Voce deixou algum campo vazio.Por favor, preencha todos os campos.');
      return;
    }
    else{
  
    var listaConvidados = document.getElementById('lista-convidados');
  
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = '<strong>Nome:</strong> ' + nome + '<br>' +
                     '<strong>Data:</strong> ' + data + '<br>' +
                     '<strong>Horário:</strong> ' + horario;
  
    listaConvidados.appendChild(card);
  
    // Limpar campos após a adição do convidado
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
}
  }