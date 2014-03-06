Class('StripController').includes(NodeSupport)({
    prototype : {
        init : function (config){

            this.bindEvents();

            this.pixelStrip = config.pixelStrip;

            this.mechanic = new PongMechanic({

                data : {
                    pixelStrip : this.pixelStrip
                },

                inputs : [
                    {
                        type : 'OneKeyInput',
                        input : {
                            key : 'Z'
                        }
                    },

                    {
                        type : 'OneKeyInput',
                        input : {
                            key : 'M'
                        }
                    }
                ]

            });
            this.mechanic.setup();
            return true;
        },

        update : function(){
            this.mechanic.update();
        },

        bindEvents : function(){

        }
    }
});