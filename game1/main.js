'use strict'
const Game = new Phaser.Game(600, 600, Phaser.AUTO, '', {preload, create, update})

let player
let ground
let cursors
let fon
const speed = 100
let star
let star2
let star3
let wolf
let food
let food2
let food3
let loshiq
let n=0





function preload(){
  Game.load.image('tileset', '32x32_tileset_mario.png')
 Game.load.image('bunny', 'korean.png')
 Game.load.image('bunny2', 'french.png')
 Game.load.image('loshiq', 'greek.png')
 Game.load.image('bunny3', 'bunny3.png')
 Game.load.image('german', 'german.png')
 Game.load.image('calon', 'c.png')
 Game.load.image('w', 'terra.png')
   Game.load.spritesheet('player', 'brownwolf.png' , 192/3, 192/4)
 Game.load.spritesheet('wolf', 'bebi1.png' , 144/3, 195/4)
   Game.load.tilemap('uwu', 'karta1.json', null , Phaser.Tilemap.TILED_JSON)

    Game.load.image('background', 'background.jpg')

}

function create() {
    
    Game.scale.pageAlignHorizontally = true
    Game.stage.backgroundColor = '#fff'
    fon = Game.add.sprite(0,0,'background')
    
    const karta = Game.add.tilemap('uwu')

    karta.addTilesetImage('da', 'tileset')
    karta.setCollisionByExclusion([])

    ground = karta.createLayer(0)

    karta.createLayer(1)

    fon.width=1200
    fon.height=2000

    Game.world.setBounds(0,0,1060,2000)
    star = Game.add.image(500, 140, 'bunny')
    star2 = Game.add.image(440, 430, 'bunny2')
    star3 = Game.add.image(70, 630, 'loshiq')
    food = Game.add.image(70, 835, 'german')
    food3 = Game.add.image(350, 1225, 'calon')
    food2 = Game.add.image(500, 840, 'bunny3')
    loshiq = Game.add.image(240, 1240, 'w')
    star.scale.setTo(0.5)
    star2.scale.setTo(0.5)
    star3.scale.setTo(0.5)
    food.scale.setTo(0.5)
    food2.scale.setTo(1.7)
    food3.scale.setTo(0.5)
    loshiq.scale.setTo(0.5)
    player = Game.add.sprite(50, 20, 'player')
    wolf = Game.add.sprite(100, 1624, 'wolf')
    wolf.animations.add('right', [6,7,8], 10, true).play()
    wolf.animations.add('stay', [7], 10, true).play()

    
    
    player.anchor.setTo(0.5)
    player.scale.setTo(1.7)
    player.animations.add('down', [0,1,2], 10, true).play()
    player.animations.add('left', [3,4,5], 10, true).play()
    player.animations.add('up', [9,10,11], 10, true).play()
    player.animations.add('right', [6,7,8], 10, true).play()
    player.animations.add('stay', [1], 10, true).play()
    wolf.animations.add('hi', [6,7,8], 10, true).play()
    wolf.animations.add('hiagain', [3,4,5], 10, true).play()
    wolf.animations.add('ugh', [7], 10, true).play()
    Game.physics.enable(player)

    player.body.collideWorldBounds=true

    player.body.gravity.y = 170

    player.body.bounce.y = 0.4

Game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER, 0.1, 0.1)
    cursors = Game.input.keyboard.createCursorKeys()
    
}

function update(){
//dvijeniq
    if(cursors.left.isDown)
    {
        player.x=player.x-4
        player.animations.play('left')
    }
    else if(cursors.right.isDown)
    {
      player.x=player.x+4
      player.animations.play('right')
    }
    else if(cursors.up.isDown)
    {
        player.y=player.y-1
        player.animations.play('up')
        
    }
    else {player.frame = 1
        wolf.animations.play('ugh')}
   Game.physics.arcade.collide(player, ground)

//zaicite
   if(player.y< star.y+40 && player.y>star.y-40 &&
    player.x<star.x+40 && player.x>star.x-40)
    {
        star.scale.setTo(0)
        player.scale.setTo(1.7)
        
    }
    if(player.y< star2.y+40 && player.y>star2.y-40 &&
        player.x<star2.x+40 && player.x>star2.x-40)
        {
            star2.scale.setTo(0)
            player.scale.setTo(1.7)
            
        }
        if(player.y< star3.y+40 && player.y>star3.y-40 &&
            player.x<star3.x+40 && player.x>star3.x-40)
            {
                star3.scale.setTo(0)
                player.scale.setTo(1.8)
    
            }
            if(player.y< food.y+40 && player.y>food.y-40 &&
                player.x<food.x+40 && player.x>food.x-40)
                {
                    star.scale.setTo(0.5)
                    star2.scale.setTo(0.5)
                    star3.scale.setTo(0.5)
                    food.scale.setTo(0.5)
                    food2.scale.setTo(1.7)
                    food3.scale.setTo(0.5)
                    loshiq.scale.setTo(0.5)
                    player.x=50
                    player.y=20}
                    if(player.y< food3.y+40 && player.y>food3.y-40 &&
                        player.x<food3.x+40 && player.x>food3.x-40)
                        {
                            star.scale.setTo(0.5)
                            star2.scale.setTo(0.5)
                            star3.scale.setTo(0.5)
                            food.scale.setTo(0.5)
                            food2.scale.setTo(1.7)
                            food3.scale.setTo(0.5)
                            loshiq.scale.setTo(0.5)
                            player.x=50
                            player.y=20}
                    if(player.y< food2.y+40 && player.y>food2.y-40 &&
                        player.x<food2.x+40 && player.x>food2.x-40)
                        {
                            player.scale.setTo(2)}
                    
        
               if (player.y< loshiq.y+40 && player.y>loshiq.y-40 &&
                    player.x<loshiq.x+40 && player.x>loshiq.x-40)
                    {
                        star.scale.setTo(0.5)
                            star2.scale.setTo(0.5)
                            star3.scale.setTo(0.5)
                            food.scale.setTo(0.5)
                            food2.scale.setTo(1.7)
                            food3.scale.setTo(0.5)
                            loshiq.scale.setTo(0.5)
                            player.x=50
                            player.y=20
                    }
                    
                    if(player.y< food2.y+40 && player.y>food2.y-40 &&
                        player.x<food2.x+40 && player.x>food2.x-40)
                        {
                            food2.scale.setTo(0)}
                            
     //vulche
            if(player.y< wolf.y+40 && player.y>wolf.y-40 &&
                player.x<wolf.x+40 && player.x>wolf.x-40)
                {
                    if(cursors.left.isDown)
    {
        wolf.x = player.x -20
        wolf.animations.play('hiagain')
    }
    if(cursors.right.isDown)
    {
        wolf.x = player.x-20
        wolf.animations.play('hi')
    }
                    
                   
                    if(cursors.down.isDown && wolf.x >= 900)
                    {wolf.scale.setTo(0)
                    player.x = 50
                    player.y = 20
                    wolf.x = 100
                    wolf.y = 1624
                    wolf.scale.setTo(1)
                    star.scale.setTo(0.5)
                    star2.scale.setTo(0.5)
                    star3.scale.setTo(0.5)
                    food.scale.setTo(0.5)
                    food2.scale.setTo(1.7)
                    food3.scale.setTo(0.5)
                    loshiq.scale.setTo(0.5)}
                            
                }
        
}

