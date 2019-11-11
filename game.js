window.onload = init;
window.addEventListener('keydown', handleKeydown, false);
window.addEventListener('keyup', handleKeyup, false);
let canvas;


function handleKeydown(evt) {
    switch(evt.keyCode){
        case 38://haut
        pers.dy = -3;
        break;
        case 40://bas
        pers.dy = 3;
        break;
        case 37://gauche
        pers.dx = -3;
        break;
        case 39://droite
        pers.dx = 3;
        break;
    }
}
  function handleKeyup(evt) {
    switch(evt.keyCode){
        case 38://haut
        pers.dy = 0;
        break;
        case 40://bas
        pers.dy = 0;
        break;
        case 37://gauche
        pers.dx = 0;
        break;
        case 39://droite
        pers.dx = 0;
        break;
        case 32:
        shoot();
        break;
    }
}

//Classe du personnage principal 
class perso {
  constructor(x,y,dx ,dy,ctx){
    this.x = x;
    this.y = y; 
    this.dx = dx;
    this.dy = dy;
    this.ctx = ctx;
    
  }
  draw(){
    ctx.fillStyle = "blue"; 
    ctx.fillRect(this.x,this.y,30,30);
  }
  move(){
    // gestion mouvement vertical du personnage 
    this.y += this.dy;
    //dépasse vers le bas
    if( this.y > 505 ){
   
      this.y = -2;
    } 
    //dépasse vers le haut
    if (this.y < -5){
      this.y  = 502;
    }
    //Gestion du déplacement horizontal du personnage.
    this.x += this.dx;
    if(this.x > 970){
      
      this.x = 970;
    }
    if ( this.x < 0){
      this.x = 0;
    }
    ////////////////////////////////////////////////////////
  }
  shoot(){
   

  }
}
/////////////////////////////////////////////////////////////



// classe obstacles apparition hasardeuse 
class obstacle {
  constructor(x , y , dx , dy , ctx){
    this.x = x;
    this.y = y; 
    this.dx = dx;
    this.dy = dy;
    this.ctx = ctx;  
  }
  draw_obstacle(){
    ctx.fillStyle = "blue"; 
    ctx.fillRect(this.x,this.y,30,30);
  }
  move_obstacle(){
    this.y += this.dy;
    this.x += this.dx;
}
}


function anime60fps() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pers.draw();
  pers.move();
  
  // obstacles 
  obs.draw_obstacle();
  obs.move_obstacle();
//////////////////////////////////////////////////////
  
  
  requestAnimationFrame(anime60fps);
  };

function init() {
  
  canvas = document.querySelector("#Canvas");
  
  //context graphique
  ctx = canvas.getContext("2d");
  // après
  requestAnimationFrame(anime60fps);
  pers = new perso(300,180,0,0,ctx);
  obs = new obstacle( 200 , 100 , 1 , 0 , ctx);
  
 
}