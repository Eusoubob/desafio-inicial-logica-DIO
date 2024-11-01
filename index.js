/*

# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois 
utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

*/

const NomeDoHeroi = "Mago Programador"
const XPDoHeroi = 2000
let NivelDoHeroi = null

if (XPDoHeroi <= 1000) {
    NivelDoHeroi = "Ferro"
} else if (XPDoHeroi <= 2000) {
    NivelDoHeroi = "Bronze"
} else if (XPDoHeroi <= 5000) {
    NivelDoHeroi = "Prata"
} else if (XPDoHeroi <= 7000) {
    NivelDoHeroi = "Ouro"
} else if (XPDoHeroi <= 8000) {
    NivelDoHeroi = "Platina"
} else if (XPDoHeroi <= 9000) {
    NivelDoHeroi = "Ascendente"
} else if (XPDoHeroi <= 10000) {
    NivelDoHeroi = "Imortal"
} else {
    NivelDoHeroi = "Radiante"
}

console.log(`O Herói de nome **${NomeDoHeroi}** está no nível de **${NivelDoHeroi}**`)
