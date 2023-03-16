    const adicionarBotao = document.querySelector('#adicionar');
	const tabela = document.querySelector('tbody');

	adicionarBotao.addEventListener('click', () => {
		const nome = document.querySelector('#nome').value;
		const telefone = document.querySelector('#telefone').value;

		if (nome && telefone) {
			const linha = document.createElement('tr');
			const colunaNome = document.createElement('td');
			const colunaTelefone = document.createElement('td');

			colunaNome.textContent = nome;
			colunaTelefone.textContent = telefone;

			linha.appendChild(colunaNome);
			linha.appendChild(colunaTelefone);
			tabela.appendChild(linha);

			document.querySelector('#nome').value = '';
			document.querySelector('#telefone').value = '';
		}
	});
