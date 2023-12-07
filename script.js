let answer1 = prompt("Dentro da mesma matéria, use sua melhor nota \
entre normal ou recuperaçao, do primeiro trimestre")
let answer2 = prompt("Dentro da mesma matéria, use sua melhor nota \
entre normal ou recuperaçao, do segundo trimestre")
let answer3 = prompt("Dentro da mesma matéria, use sua melhor nota \
entre normal ou recuperaçao, do terceiro trimestre")
let state = ""
let finalScore = (answer1*3 + answer2*3 + answer3*4)/10
if (finalScore >= 6) {
    state = "aprovado gg"
}
if (finalScore < 6) {
    state = "bah vai ter que fazer extra(nao conseguiu media 6)"
}

alert(`Nota final: ${finalScore}, ${state}`)