
//entrega1

let numero1 = parseInt(prompt('Ingrese primer numero'))
let numero2 = parseInt(prompt('Ingrese segundo numero'))

if(numero1<numero2){
} else if(numero1 > numero2) {
    for(let i=numero1;i>=numero2;i--){
        console.log(i)
    }
} else {
    alert('los numeros ingresados son iguales')
}
