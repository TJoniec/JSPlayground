/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* Globals $, api */
/* Note that we are using api instead of spa in this example.  
 * 
/* The question that needs to be answered is that is the var statement make something a global?
*/

api.playground = (function () {
   
    /* --- Setup the variables in object literals ----- */
    
    
    var configMap = {
        
        slider_state : 0,
        extended_height: 434,
        extended_title: 'Click to Retract',
        retracted_height : 16,
        retracted_title : 'Click to Expand',
        html_template : String()+ '  Read from configMap'
                
    }; 
    
    
    /* jQuery objects in the realm of local containers */
    /* $container is the highest level in the context of this feature module */
    
    var jqueryMap = {
        $container : null
    };
    
    
    setjqueryMap = (function ($appenddiv) {
       /* This will actually append to the jQueryMap object literal -- need to make assignment */
       
       jqueryMap.$container = $appenddiv;
        
        
    });
    
    function_a = (function () {
        console.log('Successffaully Called the api.util.init() function without a parameter');
        
    });
    
    function_b = (function ($appenddiv) { 
        console.log('Successfully called the api.util.initparam() with a parameter');
        /* Translate this to internal module convention */
        setjqueryMap($appenddiv);
        jqueryMap.$container.append(configMap.html_template);
        jqueryMap.$container
                .attr('title', 'Test');
        
    });
    
      
    /* --- Setup the API's --- */
    
    return {
        init : function_a,

        /* This one will take a parameter */
        initparam : function_b
    };
 
    

})();







