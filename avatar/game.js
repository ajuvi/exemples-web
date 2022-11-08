/*game********************************************************************************/

//variables globals del joc		
var GAME_PAS = 4;
var GAME_WIDTH = 800;
var GAME_HEIGHT = 500;		
var FRAME_DELAY = 8;

//estats del jugador
var STATE_LOOKDOWN = 0;
var STATE_LOOKLEFT = 1;
var STATE_LOOKRIGHT = 2;
var STATE_LOOKUP = 3;
var STATE_WALKDOWN = 4;
var STATE_WALKLEFT = 5;
var STATE_WALKRIGHT = 6;
var STATE_WALKUP = 7;

//jugador
var player = new Avatar(375,275,50,50,"./zelda.png");

//mapa del teclat	
var keys = [];
		
/* main loop */
function loop(){
	logic();
	draw();
}

/* logica del joc */
function logic(){
	
	if(keys[38]) player.moveUp(); //amunt
	else if(keys[40]) player.moveDown(); //avall					
	else if(keys[39]) player.moveRight();  //dreta
	else if(keys[37]) player.moveLeft(); //esquerre
	else player.stop();
}

/* dibuixar el canvas */
function draw(){
	var c = document.getElementById("mycanvas");
	var ctx = c.getContext("2d");
	
	//neteja la pantalla
	ctx.clearRect(0,0,800,500);
	
	//dibuixa el quadrat
	player.paint(ctx);	
}

//timer
setInterval("loop();",16);

//events de teclat
$(window).keydown(function(event){
	keys[event.keyCode]=1;
});  

$(window).keyup(function(event){
	keys[event.keyCode]=0;
});  

