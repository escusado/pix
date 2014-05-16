//every input should be declared in the Inputs namespace
Inputs = {};

Class('App').inherits(Widget)({
    ELEMENT_CLASS : 'pix',
    prototype : {
        setup : function(){

            // // Get a reference to the canvas object
            var canvas = document.getElementById('myCanvas');
            // // Create an empty project and a view for the canvas:
            paper.setup(canvas);

            this.mechanic = new PongMechanic();

        },

        draw : function(event){
            this.mechanic.draw();
            paper.view.draw();
        }
    }
});
