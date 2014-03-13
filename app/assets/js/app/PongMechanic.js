Class('PongMechanic').inherits(Mechanic)({
    prototype : {
        //this.inputs array has player inputs 0-X
        potIndex : 0,
        score : [0,0],
        // delta : 0,
        delta : 1,
        checkForScore : false,
        length : 90,

        setup : function(){

            //Pixel Srip API
            this.setupColors();
            this.pixelStrip = new PixelStrip({
                colorData : this.getInitialColors()
            });
            this.pixelStrip.render($('.pixel-strip-placeholder'));

            //Score mockup
            this.scoreCtrl = new ScoreController({
                score : this.score
            });
            this.scoreCtrl.render($('.wrapper'));

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

            this.updateColors();

            this.pixelStrip.update();
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
        },

        setupColors : function(){
            this.colorScaleIndex = 0;
            this.colorScaleSteps = 20;
            var domainArray = [0,5,10,15,20];
            this.colorScale = d3.scale.linear().domain(domainArray).range(['#80F31F','#FB3244','#472FFA','#3AFD5D']);
        },

        getInitialColors : function(){
            var initialColors = new Array(this.length).join('0').split('');

            initialColors.forEach(function(color, i){
                initialColors[i] = this.getColor();
            }, this);

            return initialColors;
        },

        updateColors : function(){
            this.pixelStrip.colorData.forEach(function(color, i){
                this.pixelStrip.colorData[i] = this.getColor();
            }, this);
        },

        getColor : function(){
            this.colorScaleIndex = (this.colorScaleIndex > this.colorScaleSteps) ? 0 : this.colorScaleIndex+1;
            console.log(this.colorScaleIndex);
            return this.colorScale(this.colorScaleIndex);
        }

    }
});