function primeira () {
    var questaoA = 0;
    var questaoB = 0;
    var questaoC = 0;
    var numeroUno = 0;
    var numeroDuno = 0;

    
    var numeroUno = parseInt(prompt( "Digite um número:"));
    var numeroDuno = parseInt(prompt( "Digite um número:"));
    alert("Valeu, agora vá para o console!")

    
    if (numeroUno > numeroDuno){
        questaoA = numeroUno - numeroDuno
        console.log("Dos números que você digitou, " + numeroUno + " é o maior e " + numeroDuno + " é o menor. A diferença entre eles é igual a " + questaoA);
    } else {
        questaoA = numeroDuno - numeroUno
        console.log("Dos números que você digitou, " + numeroDuno + " é o maior e " + numeroUno + " é o menor. A diferença entre eles é igual a " +  questaoA);
    }
        
    questaoB = 2*numeroUno + 3*numeroDuno
    console.log("O dobro do primeiro número + o triplo do segundo é igual a " +questaoB);
    questaoC = numeroUno*numeroDuno
    console.log("Por fim, a multiplicação dos dois números é: " + questaoC);
}

function segunda(){
    var nome = 0;
    var salarioBruto = 0;
    var inss = 0;
    var salarioLiq = 0;

    nome = prompt("Bem-vinde à sua folha de pagamento! Digite seu nome, por favor:");
    salarioBruto = parseFloat(prompt("Beleza, agora informe seu salário bruto por favor!"));
    alert('Perfeito, vá para o console para ver sua folha de pagamento agora :)')


    inss = salarioBruto*0.08
    salarioLiq = salarioBruto - inss

    console.log("Nome: " +nome)
    console.log("Salário Bruto: " + salarioBruto)
    console.log("Valor do INSS de 8%: " + inss)
    console.log("Salário Líquido (descontando o INSS): " + salarioLiq)
}

function terceira(){
    
    nome = prompt("Bem-vinde à sua folha de pagamento! Digite seu nome, por favor:");
    salarioBruto = parseFloat(prompt("Beleza, agora informe seu salário bruto por favor!"));
    alert('Perfeito, vá para o console para ver sua folha de pagamento agora :)')


    if (salarioBruto <= 1000){
        inss = salarioBruto*0.08
    } else if (salarioBruto <= 1500) {
        inss = salarioBruto*0.085
    } else {
        inss = salarioBruto*0.09
    }

    salarioLiq = salarioBruto - inss

    console.log("Nome: " +nome)
    console.log("Salário Bruto: " + salarioBruto)
    console.log("Valor do INSS de acordo com o valor bruto que você recebe: " + inss)
    console.log("Salário Líquido: " + salarioLiq)
}