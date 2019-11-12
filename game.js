window.onload = init;

window.addEventListener('keydown', handleKeydown, false);
window.addEventListener('keyup', handleKeyup, false);
let canvas;
const obst = [];
var gameStatus=0;

function handleKeydown(evt) {
    switch(evt.keyCode){
        case 38://haut
        pers.dy = -5;
        break;
        case 40://bas
        pers.dy = 5;
        break;
        case 37://gauche
        pers.dx = -5;
        break;
        case 39://droite
        pers.dx = 5;
        break;
        case 13:
        m.bouton_jouer()
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
    ctx.fillStyle = "red"; 
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
  
  colide(){
    obst.forEach(element => {
      //ligne à changer en fonction du sprite 
      if (pers.x < element.x +  25 &&
        pers.x + 25 > element.x &&
        pers.y < element.y +  25 &&
        25 + pers.y > element.y) {
         // collision détectée !
         alert(element.x);
     }
      
    });
    
   
  }
}
/////////////////////////////////////////////////////////////




// classe obstacles apparition hasardeuse 
class obstacle {
  constructor(dx , dy , ctx){
    this.x =Math.floor (Math.random()*1000 + 1000);
    this.y = Math.floor(Math.random() * 500); 
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
  repop_obstacle(){
    var compt = 0;
    ///// réaparition si sort du cadre 
      if(this.x < -33){
        this.x = Math.floor(Math.random()*300 + 1000);
      }
      /// on évite que les obstacles se superposent
      obst.forEach(element => {
       
          if (this.x < element.x +  33 &&
            this.x + 33 > element.x &&
            this.y < element.y +  33 &&
            33 + this.y > element.y) {
             // collision détectée !
             compt ++;
             if (compt > 1){
             this.x = Math.floor(Math.random()*300 + 1000);
             }
         }
      });
    };
  }




function anime60fps() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  if(gameStatus==0){
    m.menu();
    //m.bouton_jouer();
    
  }
  else{
    
  
  pers.draw();
  pers.move();
 pers.colide();
  

  
  
  // obstacles 
  obst.forEach(element => {
    element.draw_obstacle();
    element.move_obstacle();
    element.repop_obstacle();
  });
}
  
  

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
  m = new menu();
  
  for(let i = 0; i < 50; i++) {
    obst[i] = new obstacle(
                          -1,
                            0,
                            ctx);
  }
  
 
}