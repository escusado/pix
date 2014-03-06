Class(Inputs, 'OneKeyInput').inherits(Input)({
    prototype : {
        _bindEvents : function(){
            var input = this;
            $(document).keydown(function(e){
                if(String.fromCharCode(e.which) === input.input.key){
                    input.dispatch('press');
                }
            });

        }
    }
});