class bullet {
    constructor(x,y,dx,ctx){
      this.x = x;
      this.y = y; 
      this.dx = dx;
      this.ctx = ctx;
    }
      draw_bullet(){
        ctx.fillStyle = "white"; 
        ctx.fillRect(this.x,this.y,30,30);
      }
      
      colide_bullet(){
        obst.forEach(element => {
            if (b.x < element.x +  29 &&
                b.x + 29 > element.x &&
                b.y < element.y +  29 &&
                29 + b.y > element.y){
                    element.x = Math.floor(Math.random()*300 + 1000);
                    element.y = Math.floor(Math.random()*500);
                    this.x = 10000;
                    
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