var dia

dia=parseInt(prompt("Escriba un dia de la semana en forma de numero: "))

switch(dia){
    case 1:{
        alert("Domingo")
        break
    }
    case 2:{
        alert("Lunes")
        break
    }
    case 3:{
        alert("Martes")
        break
    }
    case 4:{
        alert("Miercoles")
        break
    }
    case 5:{
        alert("Jueves")
        break
    }
    case 6:{
        alert("Viernes")
        break
    }
    case 7:{
        alert("sabado")
        break
    }
    default:{
        alert("opción inválida")
        break
    }
}
