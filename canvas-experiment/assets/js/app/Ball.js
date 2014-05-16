Class('Ball')({
    prototype : {
        init : function (config){

            Object.keys(config || {}).forEach(function (propertyName) {
                this[propertyName] = config[propertyName];
            }, this);

            this.ballItem = new paper.Path.Rectangle(this.destination, new paper.Size(1, 1));
            this.ballItem.fillColor = '#3AFD5D';
        },

        draw : function(){
            this.update();
        },

        update : function(){
            var maxPoint,
                randomPoint;

            this.pos = Math.floor(this.ballItem.position.x += this.delta);

            this.ballItem.position = new paper.Point(this.pos, 0);
            console.clear();
            console.log('>', this.pos);
            debugger
        }
    }
});