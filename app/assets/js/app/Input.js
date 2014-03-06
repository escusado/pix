Class('Input').includes(CustomEventSupport)({
    prototype : {
        init : function (config){
            //widgetlike init
            Object.keys(config).forEach(function(key){
                this[key] = config[key];
            }, this);

            this._bindEvents();

            return true;
        }
    }
});