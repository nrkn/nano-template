(function(){
  'use strict';
  
  var nano = function( template ){
    return eval( "(function(o){return '" +
      template.replace( /'/g, "\\'" )
      .replace( /<%=\s*/g, "'+o." )
      .replace( /\s*%>/g, "+'" ) +
      "'})"
    );
  }

  if( typeof module !== 'undefined' && typeof module.exports !== 'undefined' ){
    module.exports = nano;
  } else {
    window.nano = nano;
  }
})();
