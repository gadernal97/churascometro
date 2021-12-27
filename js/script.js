let inputAdultos=document.getElementById('adultos')
let inputCriança=document.getElementById('criança')
let inputDuração=document.getElementById('duração')
let resultado=document.getElementById('result')
function calcular(){
    let alduto=inputAdultos.value
    let criança=inputCriança.value
    let duração=inputDuração.value
    let totalCarne=carnePP(duração)*alduto+(carnePP(duração)*2/criança)
    let totalCerveja=cervejaPP(duração)*alduto
    let totalBebidas=bebidaPP(duração)*alduto+(bebidaPP(duração)*2/criança)
    resultado.innerHTML=`<p> ${totalCarne/1000} kG de carne.</p> `
    resultado.innerHTML+=`<p> ${Math.ceil(totalCerveja/355)} latas de cerveja.</p> `
    resultado.innerHTML+=`<p> ${Math.ceil(totalBebidas/2000)} Pet 's 2L Bebidas .</p> `
}
function carnePP(duração){
    if(duração>=6){
        return 650
    }else{
        return 400
    }
}
function cervejaPP(duração){
    if(duração>=6){
        return 2000
    }else{
        return 1200
    }
}
function bebidaPP(duração){
    if(duração>=6){
        return 1500
    }else{
        return 1000
    }
}