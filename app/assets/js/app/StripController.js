Class('StripController').includes(NodeSupport)({
    prototype : {
        init : function (config){
            this.bindEvents();

            this.mechanic = new PongMechanic({
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