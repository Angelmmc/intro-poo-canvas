const canvasOOPOOP = document.getElementById("canvasOOPOOP");
const canvasOOPRandom = document.getElementById("canvasOOPRandom");
const ctx = canvasOOP.getContext("2d");
const window_height = window.innerHeight;
const window_width = window.innerWidth;

let randomX = Math.random() * window_width;
let randomY = Math.random() * window_height;
let randomRadius = Math.floor(Math.random() * 100 + 30);

canvasOOP.height = "200";// window_height;
canvasOOP.width = "200";// window_width;

canvasOOP.style.background = "#FAA9D4";

class Circle {

    constructor(x, y, radius, color, text) {
        //Carga los valores predeterminados del objeto
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
    }


    draw(context) {
        //Metodo para renderizar
        context.beginPath();
        context.strokeStyle = this.color;
        context.textAlign = "center"; //Alineación Horizontal
        context.textBaseline = "middle"; //Alineación Vertical
        context.font = "20px Arial";
        context.fillText(this.text, this.posX, this.posY);


        context.lineWidth = 2;

        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);

        context.stroke();

        context.closePath();

    }

}


//let miCirculo = new Circle(100, 100, 50, 'red', 'Tec');

let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, 'red', 'Tec');
miCirculo.draw(ctx);