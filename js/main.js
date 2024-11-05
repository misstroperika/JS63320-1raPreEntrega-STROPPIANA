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
const valorDelProducto = parseFloat(prompt( nombre + ", ingresá el valor del producto"))
const valorDelProductoEnCuotas = parseFloat(prompt("ahora ingresá el valor del producto en cuotas"))
const cantidadDeCuotas = parseInt(prompt("por último, decime la cantidad de cuotas que te dan"))
const inflacionSeptiembre = 3.5


const diferenciaValorProducto = determinarRecargo(valorDelProducto,valorDelProductoEnCuotas)
const porcentajeRecargo = determinarPorcentajeDeRecargo(valorDelProducto,diferenciaValorProducto)
const recargoMensual = determinarRecargoMensual(porcentajeRecargo,cantidadDeCuotas)

if(diferenciaValorProducto == 0){
    alert( nombre + " te convienen las cuotas")
}else if(recargoMensual < inflacionSeptiembre){
    alert(nombre + " según la inflación del mes anterior, aún con el recargo, te convienen las cuotas ")
}else{ 
    alert(nombre + " te conviene pagarlo de una")
}






