Module('Mechanic')({
    prototype : {
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

        ],
        init : function (config){
            //widgetlike init
            Object.keys(config).forEach(function(key){
                this[key] = config[key];
            }, this);
            this._setInputs();
        },

        _setInputs : function(){
            var mech = this;
            this.inputs.forEach(function(input, i){
                mech.inputs[i] = new Inputs[input.type]({
                    input : input.input
                });
            });
        }
    }
});