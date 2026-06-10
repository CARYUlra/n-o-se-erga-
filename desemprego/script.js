var nomes = [];
var sexos = [];
var salarios = [];
for (var i = 0; i < 5; i++) {
    var nome = prompt("Digite o nome do funcionário " + (i + 1) + ":");
    var sexo = prompt("Digite o sexo do funcionário " + (i + 1) + " (M/F):");
    var salario = Number(prompt("Digite o salário do funcionário " + (i + 1) + ":"));
    nomes[i] = nome;
    sexos[i] = sexo;
    salarios[i] = salario;
}
var resultado = "Funcionárias mulheres que ganham mais de R$5 mil:\n";
for (var j = 0; j < 5; j++) {
    if (sexos[j].toUpperCase() === "F" && salarios[j] > 5000) {
        resultado += "Nome: " + nomes[j] + ", Salário: R$" + salarios[j] + "\n";
    }
}
alert(resultado);