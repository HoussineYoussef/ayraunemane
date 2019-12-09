
class bullet {
    constructor(x,y,dx,ctx){
      this.x = x;
      this.y = y; 
      this.dx = dx;
      this.ctx = ctx;
      this.image = new Image();
      this.image.src = 'ressource/beam.png';
      this.shoot_sound = new Audio("ressource/shoot.mp3");
      this.shoot_sound.volume = 0.1;
    }
      draw_bullet(){
       ctx.drawImage(this.image, this.x, this.y,60,13);
       
      }
      
      colide_bullet(){
        obst.forEach(element => {
            if (this.x < element.x +  50 &&
                this.x + 50 > element.x &&
                this.y < element.y +  14 &&
                14 + this.y > element.y){
                    element.x = Math.floor(Math.random()*300 + 1000);
                    element.y = Math.floor(Math.random()*500);
                    var index = chargeur.indexOf(this);
                    chargeur.splice(index,1);
                    score++;
                }
        });

      }
    travel(){
        this.x += this.dx;
    }
    shoot(){
      
        chargeur.push(new bullet(pers.x,pers.y,6,ctx));
        this.x = pers.x;
        this.y = pers.y;
        this.shoot_sound.play();
        
        

      
    }

      
      
    }