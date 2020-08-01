var player, enemy1, enemy2, enemy3, enemy4;
function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
     player = createSprite(displayWidth/2,displayHeight/2);
     leftButton = createButton("←");
     rightButton = createButton("→");
     upButton = createButton("↑");
     downButton = createButton("↓");
     upperleft = createButton("↖");
     upperright = createButton("↗");
     lowerleft = createButton("↙");
     lowerright = createButton("↘");
     leftButton.position(displayWidth/35,displayHeight*4/5);
     rightButton.position(displayWidth/15,displayHeight*4/5);
     downButton.position(displayWidth/20,displayHeight*5/6);
     upButton.position(displayWidth/20,displayHeight*3/4);
     upperleft.position(displayWidth/30,displayHeight*3/4);
     upperright.position(displayWidth/15,displayHeight*3/4);
     lowerleft.position(displayWidth/30,displayHeight*5/6);
     lowerright.position(displayWidth/15,displayHeight*5/6);
     gameState = "start";
     
    
     
}
function draw(){
    background(0);
    leftButton.mousePressed(()=>{
        bullet = createSprite(displayWidth/2,displayHeight/2,10,10);
        bullet.setVelocity(-4,0);
    });
    leftButton.mousePressed(()=>{
        bullet = createSprite(displayWidth/2,displayHeight/2,10,10);
        bullet.setVelocity(-4,0);
    });
    leftButton.mousePressed(()=>{
        bullet = createSprite(displayWidth/2,displayHeight/2,10,10);
        bullet.setVelocity(-4,0);
    });
    leftButton.mousePressed(()=>{
        bullet = createSprite(displayWidth/2,displayHeight/2,10,10);
        bullet.setVelocity(-4,0);
    });
    spawnEnemy();
    drawSprites();
}
function spawnEnemy(){
    if(World.frameCount%120===0){
        r = Math.round(random(50,displayHeight-50));
        enemy1 = createSprite(0,r,50,50);
        rvx = Math.round(random(4,8));
        rvy = Math.round(random(-8,8));
        enemy1.setVelocity(rvx,rvy);
        enemy1.lifetime = 1000;
    }
    if(World.frameCount%180===0){
        r = Math.round(random(50,displayWidth-50));
        enemy2 = createSprite(r,0,50,50);
        rvx = Math.round(random(-4,8));
        rvy = Math.round(random(4,8));
        enemy2.setVelocity(rvx,rvy);
        enemy2.lifetime = 1000;
    }
    if(World.frameCount%150===0){
        r = Math.round(random(50,displayWidth-50));
        enemy3 = createSprite(displayWidth,r,50,50);
        rvx = Math.round(random(-4,-8));
        rvy = Math.round(random(-8,8));
        enemy3.setVelocity(rvx,rvy);
        enemy3.lifetime = 1000;
    }
    if(World.frameCount%120===0){
        r = Math.round(random(50,displayHeight-50));
        enemy4 = createSprite(r,displayHeight,50,50);
        rvx = Math.round(random(-4,8));
        rvy = Math.round(random(-4,-8));
        enemy4.setVelocity(rvx,rvy);
        enemy4.lifetime = 1000;
    }
}