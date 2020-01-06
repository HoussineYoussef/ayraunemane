
class bullet {
    constructor(x,y,dx,ctx){
      this.x = x;
      this.y = y; 
      this.dx = dx;
      this.ctx = ctx;
      this.image = new Image();
      this.image.src = 'ressource/img/beam.png';
      this.shoot_sound = new Audio("ressource/son/shoot.mp3");
      this.shoot_sound.volume = 0.1;
      
      
    }
      draw_bullet(){
       ctx.drawImage(this.image, this.x, this.y,60,13);
       
      }
      
      colide_bullet(){
        obst.forEach(element => {
            if (this.x < element.x +  50 &&
                this.x + 50 > element.x &&
                this.y < element.y +  20 &&
                20 + this.y > element.y){
                    element.x = Math.floor(Math.random()*300 + 1000);
                    element.y = Math.floor(Math.random()*500);
                    var index = chargeur.indexOf(this);
                    chargeur.splice(index,1);
                    score++;
                    pers.isShooting = 0;
                }
        });

      }

      travel(){
          this.x += this.dx;
          if(this.x > 1000){
            var index = chargeur.indexOf(this);
                      chargeur.splice(index,1);
          }

          if(this.x < pers.x + 130){
            pers.isShooting = 1;
          }
          else{
            pers.isShooting = 0;
          }
          
        }
    

      
      
    }