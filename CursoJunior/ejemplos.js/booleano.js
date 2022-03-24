

let valor1, valor2;
let vacio=null;

valor1 = prompt("Digita un numero:");
valor2 = prompt("Digita otro numero:");

if(valor1 >=0 && valor2 >= 0){
   
    if(valor1 == valor2){
        alert("TRUE: Los numeros son iguales.");
    }else{
        alert("FALSE: Los numeros son distintos");
    }
// }else if(valor1==vacio && valor2==vacio){
//     alert("ERROR no ha digitado nada.");
}else{
    alert("ERROR Debe digitar valores numericos y que sean mayores que 0.");
}