Class('FancyInit')({
    prototype : {
        init : function (options){
            Object.keys(config || {}).forEach(function (propertyName) {
                this[propertyName] = config[propertyName];
            }, this);
        }
    }
});