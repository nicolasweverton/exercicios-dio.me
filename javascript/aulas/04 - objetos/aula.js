const pessoa = {
    nome: 'Nicolas Weverton',
    idade: 20,

    descrever: function () {
        this
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

pessoa['nome'] = 'teste';