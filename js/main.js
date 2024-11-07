// Funciones

function determinarRecargo(valordelproducto,valorencuotas){
    const resultado1 = valorDelProductoEnCuotas - valorDelProducto
    return resultado1;
}

function determinarPorcentajeDeRecargo(valorDelProducto,diferenciaValorProducto){
    const resultado2 = diferenciaValorProducto * 100 / valorDelProducto
    return resultado2;
}

function determinarRecargoMensual(porcentajeRecargo,cantidadDeCuotas){
    const resultado3 = porcentajeRecargo / cantidadDeCuotas
    return resultado3;
}



// Inicio programa

const nombre = prompt("Ingrese su nombre")
let valorDelProducto = parseFloat(prompt( nombre + ", ingresá el valor del producto"))
let valorDelProductoEnCuotas = parseFloat(prompt("ahora ingresá el valor del producto en cuotas"))
let cantidadDeCuotas = parseInt(prompt("por último, decime la cantidad de cuotas que te dan"))
const inflacionSeptiembre = 3.5


let diferenciaValorProducto = determinarRecargo(valorDelProducto,valorDelProductoEnCuotas)
let porcentajeRecargo = determinarPorcentajeDeRecargo(valorDelProducto,diferenciaValorProducto)
let recargoMensual = determinarRecargoMensual(porcentajeRecargo,cantidadDeCuotas)

if(diferenciaValorProducto == 0){
    alert( nombre + " te convienen las cuotas")
}else if(recargoMensual < inflacionSeptiembre){
    alert(nombre + " según la inflación del mes anterior, aún con el recargo, te convienen las cuotas ")
}else{ 
    alert(nombre + " te conviene pagarlo de una")
}

let nuevaconsulta = prompt(nombre + " ¿querés hacer otra consulta?")


while(nuevaconsulta == ("sí" || "si" || "Si" || "Sí" || "SI" || "SÍ")){
    valorDelProducto = parseFloat(prompt( nombre + ", ingresá el valor del producto"))
    valorDelProductoEnCuotas = parseFloat(prompt("ahora ingresá el valor del producto en cuotas"))
    cantidadDeCuotas = parseInt(prompt("por último, decime la cantidad de cuotas que te dan"))

    diferenciaValorProducto = determinarRecargo(valorDelProducto,valorDelProductoEnCuotas)
    porcentajeRecargo = determinarPorcentajeDeRecargo(valorDelProducto,diferenciaValorProducto)
    recargoMensual = determinarRecargoMensual(porcentajeRecargo,cantidadDeCuotas)

    if(diferenciaValorProducto == 0){
        alert( nombre + " te convienen las cuotas")
    }else if(recargoMensual < inflacionSeptiembre){
        alert(nombre + " según la inflación del mes anterior, aún con el recargo, te convienen las cuotas ")
    }else{ 
        alert(nombre + " te conviene pagarlo de una")
    }
    
    nuevaconsulta = prompt(nombre + " ¿querés hacer otra consulta?")

    if(nuevaconsulta == ("no" || "NO" || "No")){
      break;
    }
}

if(nuevaconsulta == ("no" || "NO" || "No")){
    alert(nombre + " gracias por usar nuestro servicio")
}




