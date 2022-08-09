src="jquery-3.6.0.min.js"
// Altura e largura do fundo ex: 15 x 15 caixinhas verdes
const SIZE = 15

// Tamanho das caixinhas verdes
const BOX_SIZE = 2

var apple = []

var snake = []

var snakelinha = 8
var snakecoluna = 3
var points = 0;
var snakespeed = 800;


$(document).ready(function () {
    drawBackground()
   
});


// Adiciona a maçã
function setApple() {
    // Verifica se a maça existe
    if (apple.length > 0){
        $(".row:nth-child("+apple[0]+") .col:nth-child("+apple[1]+")").html("") 

    }
     
    // Gera a posição da maça
    apple = [ returnRandomValue(),returnRandomValue()];

    // Verifica se maça não está na mesma posição que a cobra
    if(apple[0] == snake[0] && apple[1] == snake [1]){

        
        setApple()
        
    }
    else {
        $(".row:nth-child("+apple[0]+") .col:nth-child("+apple[1]+")").html("<img src='img/apple.png'' class='applesize'>")
        console.log(apple)
    }

 

   
}

// Adiciona a Cobra
function startSnake() {


    if (snake.length > 0){
        $(".row:nth-child("+snake[0]+") .col:nth-child("+snake[1]+")").html("") 

    }

    

    snake = [snakelinha,snakecoluna]
    $(".row:nth-child("+snake[0]+") .col:nth-child("+snake[1]+")").html("<img src='img/snakeicon4.png' class='snakesize'>")
    console.log(apple)
}


// Gera um número aleatorio corespodente ao tamanho do SIZE

function returnRandomValue(min=1,max=SIZE){
    return parseInt( Math.random() * (max - min) + min)


}



function drawBackground() {

    // Prepara o HTML
    
    // Para cada linha
    for (i = 0; i < SIZE; i++) {
        html = `<div class="row" style="height:${BOX_SIZE}em;width: ${BOX_SIZE * SIZE}em;">`;
        
        // Para cada coluna
        for (j = 0; j < SIZE; j++) {
            html += `<div class="col" style="height:${BOX_SIZE}em; width: ${BOX_SIZE}em;"></div>`;
        }
        html += `</div>`;

        // Adicina na tela
        $('#box').append(html)
    }
}


// Inicia o jogo adicionando a maçã e a cobra

function startGame()
{
    snakelinha = 8
    snakecoluna = 3
    setApple()
    startSnake()
    points = 0
    setpoints()
    move = null
}

// Verifica se a cobre comeu a maça e adiciona os pontos
function snakeeat(){
    if(apple[0] == snake[0] && apple[1] == snake [1]){

            
        setApple()
        points = points + 1
        setpoints()
    }
    startSnake()

}

//Verifica os limites do campo e da cobra

function gameover(){

    if (snake[0] < 1 | snake[1] < 1 ){
        startGame()
    }

    else if (snake[0] < 0 | snake[1] < 0  ){
        startGame()}

    else if (snake[0] > 15 | snake[1] > 15  ){
            startGame()}

    else if (snake[0] > 15 | snake[1] > 15  ){
                startGame()
        
         }
        
}


// Exibe os pontos na tela
function setpoints(){
    html = `<h1 id= points> Points: ${points}</h1>`;
    $('#points').append(html)
}



intervalup = setInterval(moveup,snakespeed);
intervaldown = setInterval(movedown,snakespeed);
intervalleft = setInterval(moveleft,snakespeed);
intervalright = setInterval(moveright,snakespeed);


    var move = null;

// Recebe as teclas e controla a cobra
document.addEventListener('keydown', function(event) {
    const key = event.key; 
  
    switch (event.key) {
    
      case "ArrowLeft":
        move = "left"
        intervalleft()
          break;

      case "ArrowRight":
        move = "right"
        intervalright()
        break;

      case "ArrowUp":
        move = "up"
        intervalup()
        break;   

      case "ArrowDown":
        move = "down"
        intervaldown()
          break;
          
     }
});




// Move a cobra para cima
function moveup(){
    if ( move == "up"){
        snakelinha = snakelinha - 1
        startSnake()
        snakeeat()
        gameover()

    }
   
}
// Move a cobra para baixo
function movedown(){
    if (move == "down"){

        snakelinha = snakelinha + 1
        startSnake()
        snakeeat()
        gameover()
    }
   
  
}
// Move a cobra para a direita
function moveright(){
    if (move == "right"){
        snakecoluna = snakecoluna + 1
        startSnake()
        snakeeat()
        gameover()

    }


    
}
// Move a cobra para a esquerda
function moveleft(){
    if (move == "left"){
        snakecoluna = snakecoluna - 1
        startSnake()
        snakeeat()
        gameover()

    }

    
}


