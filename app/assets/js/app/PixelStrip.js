Class('PixelStrip').inherits(Widget)({
    ELEMENT_CLASS : 'pixel-strip',
    prototype : {
        colorData : ['red','green','red','green','red','green','red','green','red','green','red','green'],
        pixels : [],
        fps : 20,
        init : function(config){
            var pixel;

            Widget.prototype.init.call(this, config);

            for(var i = 0; i<this.colorData.length; i+=1){
                pixel = $('<div class="pixel i-'+i+'"></div>');
                this.pixels.push(pixel);
                this.element.append(pixel);
            }
            this.element.append('<div class="clearfix"></div>');
            return this;
        },

        update : function(){
            this._renderArray();
        },

        _renderArray : function(){
            this.colorData.forEach(function(color, i){
                this.pixels[i].css('background-color', color);
            }, this);
        }
    }
});