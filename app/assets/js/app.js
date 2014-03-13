//every input should be declared in the Inputs namespace
Inputs = {};

Class('App').inherits(Widget)({
    ELEMENT_CLASS : 'pixel-strip-placeholder',
    prototype : {
        data : [],
        fps : 1,
        _fps : 0,
        init : function(config){
            Widget.prototype.init.call(this, config);
        },

        setup : function(){
            this.stripController = new StripController();
        },

        update : function(){
            this._fps+=1;

            if(this._fps === this.fps){
                this.stripController.update();
                this._fps=0;
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
    app.setup();
    app.bind('done', function(){
        requestAnimationFrame(app.update.bind(app));
    });
    app.update();
});