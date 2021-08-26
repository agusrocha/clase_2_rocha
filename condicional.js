var child=parseInt(prompt("Ingrese la edad del niño: "));
var adultMan=parseInt(prompt("Ingrese el peso del adulto hombre: "));
var adultWoman=parseInt(prompt("Ingrese el peso de la adulta mujer: "));

if(child>=3 && adultMan<=115){
    alert("El niño y el adulto hombre pueden entrar a rush.");
}else if(child>=3 && adultWoman<=80) {
    alert("El niño y la adulta mujer pueden entrar a rush.");
}else{
    alert("El niño, el adulto hombre y la adulta mujer no pueden entrar a rush.");
}