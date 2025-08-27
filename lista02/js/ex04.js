var n1, result, cont

for(cont=0;cont<4;cont++){
    n1=parseFloat(prompt("Digite um numero: "))
    result=n1+result
}
result=result/4

if(result<7){
    alert("Reprvou: "+result)
}else{
    alert("passou "+result)
}