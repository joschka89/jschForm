/* joschka scriptbank*/

 function jschInputCheck(e,id) { 
    obj=document.getElementById(id);
    e.preventDefault();
    
    var children=obj.children;
    for (var i = 0; i < children.length; i++) {
      if(children[i].control) {
        var childId = children[i].control.attributes[1];
        console.log(childId);      
        if(children[i].control.attributes['checkrule']) {
            var childCheckRule = children[i].control.attributes[3];
            console.log(childCheckRule);
        }       
      }

    }    
 }

 function jschCheckRules(rule) {
    switch(rule) {
        default: rule='free' ;break;
    }   
 }