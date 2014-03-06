Class('App').inherits(Widget)({
    prototype : {
        init : function(config){
          console.log('asdf');
        }
    }
});

$(document).ready(function(){
  window.app = new App();
});
