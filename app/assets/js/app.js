//every input should be declared in the Inputs namespace
Inputs = {};

Class('App').inherits(Widget)({
    prototype : {
        data : [],
        fps : 20,
        init : function(config){
            Widget.prototype.init.call(this, config);

            this.pixelStrip = new PixelStrip({
                size : this.stripSize
            });

            this.pixelStrip.render(this.element);
            this.appendChild(this.pixelStrip);

            this.stripController = new StripController({
                pixelStrip : this.pixelStrip
            });
            this.appendChild(this.stripController);

            this.setup();
        },

        setup : function(){

        },

        update : function(){
            if(this.fps-- === 0){

                this.children.forEach(function(child){
                    child.update();
                });

                this.fps=1;
            }

            this.dispatch('done');
        }
    }
});

//every input should be declared in the Inputs namespace
Inputs = {};

$(document).ready(function(){
    window.app = new App({
        stripSize : 60
    });
    app.render($('.wrapper'));
    app.bind('done', function(){
        requestAnimationFrame(app.update.bind(app));
    });
    app.update();
});