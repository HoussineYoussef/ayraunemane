class bullet {
    constructor(x,y,dx,ctx){
      this.x = x;
      this.y = y; 
      this.dx = dx;
      this.ctx = ctx;
      this.image = new Image();
      this.image.src = 'ressource/beam.png';
    }
      draw_bullet(){
        ctx.drawImage(this.image, this.x, this.y,60,13);
       
      }
      
      colide_bullet(){
        obst.forEach(element => {
            if (b.x < element.x +  50 &&
                b.x + 50 > element.x &&
                b.y < element.y +  14 &&
                14 + b.y > element.y){
                    element.x = Math.floor(Math.random()*300 + 1000);
                    element.y = Math.floor(Math.random()*500);
                    this.x = 10000;
                    score++;
                }
        });

      }
    travel(){
        this.x += this.dx;
    }
    shoot(){
        this.x = pers.x;
        this.y = pers.y;
    }

      
      
    }