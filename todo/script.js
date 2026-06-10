var nomes = [];
var alturas = [];
var continuar = true;
while (continuar) {
    var nome = prompt("Digite o nome da pessoa:");
    var altura = Number(prompt("Digite a altura da pessoa (em metros):"));
    nomes[nomes.length] = nome;
    alturas[alturas.length] = altura;
    continuar = confirm("Deseja adicionar mais uma pessoa?");
}
var maiorAltura = alturas[0];
var menorAltura = alturas[0];
var nomeMaiorAltura = nomes[0];
var nomeMenorAltura = nomes[0];
for (var i = 1; i < alturas.length; i++) {
    if (alturas[i] > maiorAltura) {
        maiorAltura = alturas[i];
        nomeMaiorAltura = nomes[i];
    }
    if (alturas[i] < menorAltura) {
        menorAltura = alturas[i];
        nomeMenorAltura = nomes[i];
    }
}
alert("A maior altura é " + maiorAltura + " metros, pertencente a " + nomeMaiorAltura + ".\nA menor altura é " + menorAltura + " metros, pertencente a " + nomeMenorAltura + ".");