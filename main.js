class Conta {
    #numeroConta;
    #saldo;

    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario) {
        this.#numeroConta = numeroConta;
        this.#saldo = saldoInicial;
        this.nomeUsuario = nomeUsuario;
        this.profissaoUsuario = profissaoUsuario;
    }

    get numeroConta() {
        return this.#numeroConta;
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(novoSaldo) {
        this.#saldo = novoSaldo;
    }

    criarConta() {
        console.log("Conta criada com sucesso!");
    }

    checarExtrato() {
        console.log(`Número da conta: ${this.#numeroConta}, Saldo atual: ${this.#saldo}, Nome do usuário: ${this.nomeUsuario}, Profissão do usuário: ${this.profissaoUsuario}`);
    }

    solicitarEmprestimo(valor) {
        if (valor <= this.#saldo * 0.5) {
            this.#saldo += valor;
            console.log(`Empréstimo de valor ${valor} concedido.`);
        } else {
            console.log(`Empréstimo de valor ${valor} não pode ser concedido.`);
        }
    }

    static imprimirInstrucoes() {
        console.log("Nunca divulgue suas senhas para ninguem");
    }
}

class ContaCorrente extends Conta {
    #limiteChequeEspecial;
    #taxaManutencao;
    static contasCorrente = [];

    get limiteChequeEspecial() {
        return this.#limiteChequeEspecial;
    }

    set limiteChequeEspecial(novoLimite) {
        this.#limiteChequeEspecial = novoLimite;
    }

    get taxaManutencao() {
        return this.#taxaManutencao;
    }

    set taxaManutencao(novaTaxa) {
        this.#taxaManutencao = novaTaxa;
    }

    gerenciarLimiteChequeEspecial(novoLimite) {
        this.limiteChequeEspecial = novoLimite;
        console.log(`Limite do cheque especial alterado para ${novoLimite}`);
    }

    calcularTaxaManutencao() {
        let taxa = this.saldo * 0.01;
        this.saldo -= taxa;
        console.log(`Taxa de manutenção de ${taxa} foi deduzida.`);
    }

    static listarTodasContasCorrente() {
        console.log(this.contasCorrente);
    }
}

class ContaPoupanca extends Conta {
    #taxaJuros;
    #limiteSaques;
    static melhoresInvestimentos = ["Tesouro Direto", "Ações"];

    get taxaJuros() {
        return this.#taxaJuros;
    }

    set taxaJuros(novaTaxa) {
        this.#taxaJuros = novaTaxa;
    }

    get limiteSaques() {
        return this.#limiteSaques;
    }

    set limiteSaques(novoLimite) {
        this.#limiteSaques = novoLimite;
    }

    calcularJuros() {
        let juros = this.saldo * this.#taxaJuros;
        this.saldo += juros;
        console.log(`Juros de ${juros} foram adicionados.`);
    }

    gerenciarLimiteSaques(novoLimite) {
        this.limiteSaques = novoLimite;
        console.log(`Limite de saques alterado para ${novoLimite}`);
    }

    static verificarMelhorInvestimento() {
        console.log(this.melhoresInvestimentos);
    }
}




let conta1 = new Conta(123456, 1000, 'João', 'Engenheiro');
conta1.criarConta();
conta1.checarExtrato();
conta1.solicitarEmprestimo(2000);
conta1.solicitarEmprestimo(600); 
console.log(`Saldo após empréstimos: ${conta1.saldo}`);
Conta.imprimirInstrucoes();


let contaCorrente1 = new ContaCorrente(234567, 2000, 'Maria', 'Médica');
contaCorrente1.criarConta();
contaCorrente1.gerenciarLimiteChequeEspecial(3000);
contaCorrente1.calcularTaxaManutencao();
console.log(`Saldo após taxa de manutenção: ${contaCorrente1.saldo}`);
ContaCorrente.contasCorrente.push(contaCorrente1);
ContaCorrente.listarTodasContasCorrente();

let contaPoupanca1 = new ContaPoupanca(345678, 3000, 'Carlos', 'Advogado');
contaPoupanca1.criarConta();
contaPoupanca1.taxaJuros = 0.05;
contaPoupanca1.calcularJuros();
console.log(`Saldo após juros: ${contaPoupanca1.saldo}`);
contaPoupanca1.gerenciarLimiteSaques(3);
ContaPoupanca.verificarMelhorInvestimento();
