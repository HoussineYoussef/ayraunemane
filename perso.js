//Classe du personnage principal 
class perso {
    constructor(x,y,dx ,dy,ctx){
      this.x = x;
      this.y = y; 
      this.dx = dx;
      this.dy = dy;
      this.ctx = ctx;
      this.firstShot = 0;
      this.lastShot = 1;
      this.isShooting = 0;
      this.imageShoot = new Image();
    this.imageShoot.src = 'ressource/ironman_shoot.png';
    this.imageNeutre = new Image();
    this.imageNeutre.src = 'ressource/ironman_neutre.png';
    this.imageMove = new Image();
    this.imageMove.src = 'ressource/ironman_move.png';
      
      
    }
    draw_neutre(){
      ctx.drawImage(this.imageNeutre, this.x, this.y,30,30);
    }
    draw_shooting(){
      ctx.drawImage(this.imageShoot, this.x, this.y-2,34,34);
    }
    draw_move(){
      ctx.drawImage(this.imageMove, this.x, this.y,33,33);
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
    shoot(){
      if((this.lastShot - this.firstShot) >= 0.5){
        this.firstShot = this.lastShot ;
        
        chargeur.push(new bullet(pers.x,pers.y,6,ctx));
        b.x = pers.x;
        b.y = pers.y;
        b.shoot_sound.play();
        
      }
      this.lastShot = seconds;
      console.log(chargeur.length);
      

      
    }
  }
  /////////////////////////////////////////////////////////////
  