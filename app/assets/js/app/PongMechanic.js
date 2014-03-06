Class('PongMechanic').inherits(Mechanic)({
    prototype : {
        //this.inputs array has player inputs 0-X
        potIndex : 0,
        score : [0,0],
        delta : 1,
        setup : function(){
            this.data.pixelStrip.setPixel(this.potIndex);

            this.length = this.data.pixelStrip.pixels.length;

            this._bindEvents();
        },


        update : function(){
            this.potIndex+=this.delta;
            console.log('>>>>>>>>', this.potIndex, this.length);
            if(this.potIndex > this.length){
                this.score[0]++;
                this.potIndex = this.length-1;
                this.delta = -1;
            }

            if(this.potIndex < 0){
                this.score[1]++;
                this.potIndex = 0;
                this.delta = 1;
            }

            console.log('score: ', this.score);
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
            this._delta = playerIndex ? 1 : -1;
        }

    }
});