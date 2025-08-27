var nombre, edad

nombre=prompt("Escriba su nombre: ")
edad=parseInt(prompt("quantos anos tienes: "))

if(edad>=18){
    alert("Mr."+nombre+" tu puede tentar tener su CNH")
}
else{
    alert("Mr."+nombre+" tu no puede tener CNH")
}