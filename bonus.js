class bonus {
    constructor(type, ctx) {
        this.x = Math.floor(Math.random() * 900);
        this.y = Math.floor(Math.random() * 400);
        this.type = Math.floor(Math.random() * 5);



        this.ctx = ctx;
        this.bomb = new Image();
        this.bomb.src = 'ressource/img/radioactive.png';
        this.sablier = new Image();
        this.sablier.src = 'ressource/img/sablier.png';
        this.vie = new Image();
        this.vie.src = 'ressource/img/vie.png';
        
        this.son_bomb = new Audio("ressource/son/bonus/nuke.mp3");
        this.son_sablier = new Audio("ressource/son/bonus/timer.mp3");
        this.son_vie = new Audio("ressource/son/bonus/life.mp3");
        


    }
    draw_bonus() {

        if (typeBonus == 0) {
            ctx.drawImage(this.bomb, this.x, this.y, 30, 30);
        }
        else if (typeBonus == 1 || typeBonus == 2 || typeBonus == 3) {
            ctx.drawImage(this.sablier, this.x, this.y, 30, 30);
        }
        else if (typeBonus == 4) {
            ctx.drawImage(this.vie, this.x, this.y, 30, 30);
        }

    }


    bonusing() {
        if (pers.x < bon.x + 29 &&
            pers.x + 29 > bon.x &&
            pers.y < bon.y + 24 &&
            24 + pers.y > bon.y) {
            this.x = Math.floor(Math.random() * 900);
            this.y = Math.floor(Math.random() * 400);

            if (typeBonus == 0) {

                // collision détectée !
                this.son_bomb.play();
                obst.forEach(element => {
                    element.x = Math.floor(Math.random() * 300 + 2500);
                    element.y = Math.floor(Math.random() * 500);

                })
            }
            if (typeBonus == 1 || typeBonus == 2 || typeBonus == 3) {
                this.son_sablier.play();
                obst.forEach(element => {
                    element.dx = element.dx + 0.1;

                })


            }
            if (typeBonus == 4) {
                this.son_vie.play();
                if (pers.hp < 5){
                pers.hp += 1;
                
                let health = document.getElementById("health")
            health.value += 20;
                }
            }
            typeBonus = Math.floor(Math.random() * 5);



        }


    }
}
