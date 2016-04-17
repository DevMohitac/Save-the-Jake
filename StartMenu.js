bunnyDefender.StartMenu = function(game){
 this.startBG;

}

bunnyDefender.StartMenu.prototype={
    create: function(){
    startBG=this.add.image(0,0,'titlescreen');
    startBG.inputEnabled=true;
    startBG.events.onInputDown.addOnce(this.startGame,this);

    },
    startGame: function(pointer){

     this.state.start('MyGame');
    }
    };