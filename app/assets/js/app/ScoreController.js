Class('ScoreController').inherits(Widget)({
    ELEMENT_CLASS : 'score',

    prototype : {
        playerTemplate : '<div class="player-{{playerIndex}}">p-{{playerIndex}} : {{score}}</div>',


        init : function(config){
            Widget.prototype.init.call(this, config);
            this.setScore(this.score);
        },

        setScore : function(scoreArray){
            var scoreBuff = '';

            scoreArray.forEach(function(score, i){
                scoreBuff += this.playerTemplate.replace(/{{playerIndex}}/g, i)
                                                .replace('{{score}}', score);
            }, this);

            this.element.html(scoreBuff);
        }
    }
});