Class('PongMechanic')({
    prototype : {
        init : function (options){
            var start = new paper.Point(0, 0);

            this.ball = new Ball({
                destination : start,
                delta : 1
            });

            this.delay = 3;
            this._delay = this.delay;
        },
        draw : function(){
            if(this._delay === 0){
                this._delay = this.delay;
                this.ball.draw();
            }
            this._delay--;
        }
    }
});