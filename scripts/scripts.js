
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var rango = Number;
var rango2 = Number;
var color = String;
var num11 = Number;
var num12 = Number;
var num21 = Number;
var num22 = Number;
var num31 = Number;
var num32 = Number;

function cambio(){
    
    rango = Math.floor(Math.random() * (200 -0));
    rango2 = Math.floor(Math.random() * (200 -0));


    num11 = Math.floor(Math.random() * (9 - 0));
    num12 = Math.floor(Math.random() * (9 - 0));
    num21 = Math.floor(Math.random() * (9 - 0));
    num22 = Math.floor(Math.random() * (9 - 0));
    num31 = Math.floor(Math.random() * (9 - 0));
    num32 = Math.floor(Math.random() * (9 - 0));

    color = "#" + num11 + "" + num12 + "" + num21 + "" + num22 + "" + num31 + "" + num32;

        ctx.moveTo(rango,0);
        ctx.lineTo(rango2, 100);
        ctx.strokeStyle = color;
        ctx.stroke();
        estado = 2;

    
    
}
