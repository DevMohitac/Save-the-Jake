bunnyDefender.Preloader = function(game){
 this.preloadBar=null;
 this.titleText=null;
 this.ready=false;
}

bunnyDefender.Preloader.prototype={
    preload: function(){this.preloadBar= this.add.sprite(this.world.centerX,this.world.centerY,'preloaderBar');
    this.preloadBar.anchor.setTo(0.5,0.5);
    this.load.setPreloadSprite(this.preloadBar);
    this.titleText=this.add.image(this.world.centerX,this.world.centerY-220,'titleimage');
    this.titleText.anchor.setTo(0.5,0.5);
    this.load.image('titlescreen','assets/start_screen.png');
    this.load.spritesheet('dude','assets/dude.png',32,48);
    this.load.image('star','assets/star.png');
    this.load.image('sky','assets/sky.png');
	   this.load.image('platform','assets/platform.png');
	  
    },
    create: function(){
        this.preloadBar.cropEnabled = false;
        },
    update: function(){
    this.ready = true;
    this.state.start('StartMenu');
    }
    };