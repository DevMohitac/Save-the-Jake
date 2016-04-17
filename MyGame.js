bunnyDefender.MyGame= function(game){};
var player;
var platform;
bunnyDefender.MyGame.prototype = {
    create : function(){
	
        this.buildWorld();
		
	
        },
        buildWorld: function(){
	this.add.sprite(0,0,'sky');
	this.physics.startSystem(Phaser.Physics.ARCADE);
    player=this.add.sprite(0,this.world.height-164,'dude');
	this.physics.arcade.enable(player);
	platform=this.add.sprite(0,this.world.height-64,'platform');
	platform.scale.setTo(2,2);
	this.physics.arcade.enable(platform);
    platform.body.immovable = true;
    player.body.gravity.y=12;
	},
	
    update: function(){
	   this.physics.arcade.collide(player, platform);
   

	}
    };