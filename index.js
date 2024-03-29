const perguntar = require("readline-sync");

const contas = [];

function criarConta() {
  const nome = perguntar.question("Informe seu nome: ").toLowerCase();
  if (nome) {
    console.log("Conta criada com sucesso...");
    contas.push({ nome: nome, saldo: 0 });
  } else {
    console.log("Favor preencha corretamente o campo nome!");
  }
}

function adicionarSaldo() {
  const nome = perguntar.question("Informe seu nome: ").toLowerCase();
  if (nome) {
    const conta = contas.find(conta => conta.nome === nome)
    if(conta){
        console.log('Conta encontrada')
        const valor = parseFloat(perguntar.question('Qual valor deseja adicionar: '))
        if (!isNaN(valor) && valor > 0) {
          conta.saldo += valor;
          console.log('Saldo adicionado com sucesso!')
          console.log(contas);
        } else {
          console.log("Valor inválido.");
        }
    }else{
        console.log('Conta não localizada!')
        console.log('Deseja criar uma nova conta ou tentar novamente ? ')
        const resposta = perguntar.question('Sim = s, Não = n: ')
        if(resposta === 's'){
            criarConta();
        }else if(resposta === 'n'){
            adicionarSaldo()
        }
        else{
            console.log('Resposta inválida')
        }
    }
  } else {
    console.log("Favor preencha corretamente o campo nome!");
  }
}

function consultarSaldo(){
    const nome = perguntar.question("Informe seu nome: ").toLowerCase();
    if(nome){
        const conta = contas.find(conta => conta.nome === nome)
        if(conta){
            console.log('Conta localizada...')
            console.log(`Saldo disponível: ${conta.saldo}`)
        } else {
          console.log('Conta não encontrada.');
        }
    }else {
        console.log('Informou uma conta inválida');
    }
}

function bemVindo(){
    console.log('Seja bem vindo ao TonBanking');
    console.log('Escolha uma opção \n[1] criar conta\n[2] adicionar saldo\n[3] conferir saldo\n[4] sair');
    const opcao = perguntar.question('Qual opção desejada ? ').toString();
    if(opcao === '1'){
        criarConta();
    }else if(opcao === '2'){
        adicionarSaldo();
    }else if(opcao === '3'){
        consultarSaldo();
    } else if (opcao === '4'){
        return 4;
    } else {
        console.log('Opção inválida');
    }
}

while(true){
    const opcao = bemVindo();
    if(opcao === 4){
        break;
    }
}
