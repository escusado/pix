Class('PixelStrip').inherits(Widget)({
    ELEMENT_CLASS : 'pixel-strip',
    prototype : {
        data : [],
        fps : 20,
        init : function(config){
            Widget.prototype.init.call(this, config);

            var i = this.size;
            while(i--){
                this.element.prepend('<div class="pixel i-'+i+'"></div>');
                this.data.push(0);
            }
            this.element.append('<div class="clearfix"></div>');

            this.pixels = this.element.find('.pixel');

            return this;
        },

        setPixel : function(index){

            if(index > this.data.length || index < 0){
                console.error('Out of bounds');
                return;
            }

            this.data[this.data.indexOf(1)] = 0;
            this.data[index] = 1;
        },

        update : function(){
            this._cleanState();
            this._renderArray();
        },

        _cleanState : function(){
            this.pixels.removeClass('active');
        },


        _renderArray : function(){
            this.element.find('.i-'+this.data.indexOf(1)).addClass('active');
        }
    }
});