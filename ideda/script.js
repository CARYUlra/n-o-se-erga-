var idades = [];
var maiorIdade = 0;
var posicaoMaiorIdade = 0;
for (var i = 0; i < 4; i++) {
    var idade = Number(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
    idades[i] = idade;
    if (idade > maiorIdade) {
        maiorIdade = idade;
        posicaoMaiorIdade = i + 1;
    }
}
alert("A maior idade digitada foi: " + maiorIdade + " e ela está na posição: " + posicaoMaiorIdade + " do vetor." + "\nAs idades digitadas foram: " + idades[0] + ", " + idades[1] + ", " + idades[2] + ", " + idades[3] + ".");