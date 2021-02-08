/*
Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) 
y a través de condicionales if realice las siguientes operaciones:
*/

let var1 = window.prompt("Introduzca un valor para el diámetro de la rueda.");
console.log("Diámetro:", var1,"M.");

let var2 = window.prompt("Introduzca un valor para el grosor de la rueda.");
console.log("Grosor:", var2,"M.");

// condición diámetro
/*
a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”.
Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo 
mediano”. Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje
“La rueda es para un vehículo pequeño”.
*/
if (var1 > 1.4){
    console.log("La rueda es para un vehículo grande.");
} 
else {
    if (var1 <= 1.4 && var1 > 0.8){
        console.log("La rueda es para un vehículo mediano.");
    }
    else{
        console.log("La rueda es para un vehículo pequeño.");
    }
}

//condición grosor
/*
b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4
pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta 
rueda es inferior al recomendado” 
*/
if (var1 > 1.4, var2 < 0.4 || var1 <= 1.4 && var1 >0.8, var2 < 0.25){
    console.log("El grosor de esta rueda es inferior al recomendado.");
}
