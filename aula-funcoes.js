/*

Pedro henrique 

1

A) 10, 50

B) nada 

2

A) 

B) i) eu gosto de cenoura 
  ii) cenoura e bom pra Vista
 iii) cenoura cresem na terra

*/

//1


function minhaBio(nome, idade, cidade, estudante) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${estudante}.` )
}

minhaBio("pedro", Number(15), "saoleopoldo", "estudante")

function bio() {
    console.log("Eu sou pedro, tenho 15 anos, moro em saoleopoldo e sou estudante." )
}

bio()

//2

function numeros(n1, n2) {
   const soma = `soma: ${n1 + n2}` 
   console.log(soma)
}

numeros(9,1)

function igualOuIgual(n1, n2) {
    console.log(n1>n2)
}

igualOuIgual(50,5)

function parOuNao(n1) {
    const par = n1%2
    console.log(par===0)
}

parOuNao(4)

function texto(mensagem) {
    console.log(mensagem.length)
    console.log(mensagem.toUpperCase())
}

texto("hoje eu fiquei molhado por causa da chuva")


//3

function calculadora(n1, n2) {
    const soma = `soma: ${n1 + n2}`
    const diferensa = `diferensa: ${n1 - n2}`
    const multiplicaçao =`multiplicaçao: ${n1 * n2}`
    const divisao = `divisao:  ${n1 / n2}` 
    console.log(soma,)
    console.log(diferensa)
    console.log(multiplicaçao)
    console.log(divisao)
}

calculadora(Number(prompt("Digiteum numero")), Number(prompt("Digiteum numero")))
