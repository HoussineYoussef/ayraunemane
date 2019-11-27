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
        if (pers.x < element.x +  29 &&
          pers.x + 29 > element.x &&
          pers.y < element.y +  24 &&
          24 + pers.y > element.y) {
           // collision détectée !
           gameStatus = 2;
       }
        
      });
      
     
    }
  }
  /////////////////////////////////////////////////////////////
  