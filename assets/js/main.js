const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");
const canvasMultipleNoOut = document.getElementById("canvasMultipleNoOut");
const textoPrueba = document.getElementById("textoPrueba");


const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");
const ctxMultipleNoOut = canvasMultipleNoOut.getContext("2d");

const window_height = window.innerHeight;
const window_width = window.innerWidth;




/* canvasOOP.height = canvasOOP.offsetHeight;// window_height;
canvasOOP.width = "100";// window_width; */
/* 
canvasRandom.height = "200";// window_height;
canvasRandom.width = "200";// window_width; */
/* 
canvasMultiple.offsetHeight = "200";// window_height;
canvasMultiple.width = "200";// window_width; */



let randomX = Math.random() * canvasRandom.width;
let randomY = Math.random() * canvasRandom.height;
let randomRadius = Math.floor(Math.random() * 100 + 30);


canvasOOP.style.background = "#FAA9D4";
canvasRandom.style.background = "#E3DD23";
canvasMultiple.style.background = "#E3DD23";
canvasMultipleNoOut.style.background = "#E3DD23";

class Circle {

    constructor(x, y, radius, color, text, bgColor) {
        //Carga los valores predeterminados del objeto
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.bgColor = bgColor;
    }


    draw(context) {
        //Metodo para renderizar
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.bgColor;
        context.fill();

        context.lineWidth = 2;
        context.strokeStyle = this.color;
        context.stroke();


        context.fillStyle = "black";
        context.textAlign = "center"; //Alineación Horizontal
        context.textBaseline = "middle"; //Alineación Vertical
        context.font = "20px Arial";
        context.fillText(this.text, this.posX, this.posY);


        context.closePath();


    }

}


//let miCirculo = new Circle(100, 100, 50, 'red', 'Tec');

let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, 'red', 'Tec', 'lightblue');
miCirculo.draw(ctx);


let miCirculoRandom = new Circle(randomX, randomY, randomRadius, 'red', 'Tec', 'orange');
miCirculoRandom.draw(ctxRandom);

let arrayCircle = [];
for (let i = 0; i < 10; i++) {

    let randomX = Math.random() * canvasMultiple.offsetHeight;

    let randomY = Math.random() * canvasMultiple.offsetWidth;

    let randomRadius = Math.floor(Math.random() * 10 + 20);


    let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, "blue", i + 1, 'yellow');


    arrayCircle.push(miCirculoMultiple);

    arrayCircle[i].draw(ctxMultiple);
}


let arrayCircle2 = [];
let contenido = "";
for (let i = 0; i < 10; i++) {

    let randomX = Math.random() * canvasMultipleNoOut.offsetHeight;

    let randomY = Math.random() * canvasMultipleNoOut.offsetWidth;

    let randomRadius = Math.floor(Math.random() * 10 + 20);

    contenido += i + " x ->" + randomX + " y -> " + randomY + " rad -> " + randomRadius;


    let miCirculoMultipleNoOut = new Circle(randomX, randomY, randomRadius, "blue", i + 1, 'yellow');


    arrayCircle2.push(miCirculoMultipleNoOut);

    arrayCircle2[i].draw(ctxMultipleNoOut);
}