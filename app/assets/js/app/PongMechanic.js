Class('PongMechanic').inherits(Mechanic)({
    prototype : {
        //this.inputs array has player inputs 0-X
        potIndex : 0,
        score : [0,0],
        delta : 0,
        checkForScore : false,

        setup : function(){
            this.data.pixelStrip.setPixel(this.potIndex);

            this.scoreCtrl = new ScoreController({
                score : this.score
            });

            this.scoreCtrl.render($('.wrapper'));

            this.length = this.data.pixelStrip.pixels.length;

            this._bindEvents();
        },


        update : function(){
            this.potIndex+=this.delta;

            if(this.potIndex > this.length && this.checkForScore){
                this.scoreForPlayer(0);
                this.potIndex = this.length-1;
                // this.delta = -1;
            }

            if(this.potIndex < 0 && this.checkForScore){
                this.scoreForPlayer(0);
                this.potIndex = 0;
                // this.delta = 1;
            }

            this.data.pixelStrip.setPixel(this.potIndex);
        },

        _bindEvents : function(){
            var mech = this;

            this.inputs[0].bind('press', function(){
                mech._pressPlayer(0);
            });

            this.inputs[1].bind('press', function(){
                mech._pressPlayer(1);
            });
        },

        _pressPlayer : function(playerIndex){
            this.delta = playerIndex ? -1 : 1;
            this.checkForScore = true;
        },

        scoreForPlayer : function(playerIndex){
            this.checkForScore = false;
            this.delta = 0;
            this.score[playerIndex]+=1;
            this.updateUi(playerIndex);
        },

        updateUi : function(playerIndex){
            this.scoreCtrl.setScore(this.score);
            this.resetForPlayer(playerIndex);
        },

        resetForPlayer : function(playerIndex){
            this.data.pixelStrip.setPixel(playerIndex ? this.length-1 : 0);
        }

    }
});