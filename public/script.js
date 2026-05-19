const form = document.getElementById('formContato');
const listaContatos = document.getElementById('listaContatos');

function adicionarContato(event){
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    if(nome === '' || email === '' || telefone === ''){
        alert("Todos os campos são obrigatórios!");
        return;
    }

    const novoContato = document.createElement('li');
    novoContato.innerText = `Nome: ${nome}, E-mail: ${email}, Tel: ${telefone}`;

    listaContatos.appendChild(novoContato);
    form.reset();
}

form.addEventListener('submit', adicionarContato);