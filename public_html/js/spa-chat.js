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

api.chat = (function () {
   
    /* --- Setup the variables in object literals ----- */
    
    var configMap = {
        slider_state : 0,
        extended_height: 434,
        extended_title: 'Click to Retract',
        retracted_height : 16,
        retracted_title : 'Click to Expand',
        html_template : String()
        + '<div class="spa-chat">'
            + '<div class="spa-chat-head">'
		+ '<div class="spa-chat-head-toggle">+</div>'
		+ '<div class="spa-chat-head-title">'
		+ 'Chat'
		+ '</div>'
            + '</div>'
	
            + '<div class="spa-chat-closer">x</div>'
            + '<div class="spa-chat-sizer">'
		+ '<div class="spa-chat-msgs"></div>'
		+ '<div class="spa-chat-box">'
			+ '<input type="text"/>'
			+ '<div>send</div>'
		+ '</div>'
            + '</div>'
        + '</div>'
               
                
    },
    
    $container;
    
    
    
    
    
    
    function_a = (function ($appenddiv) {
        console.log('Successffully Called the api.chat.init() function without a parameter');
        $container = $appenddiv;
        $container.append(configMap.html_template);
        
    });
    
    function_b = (function ($appenddiv) { 
        console.log('Successfully called the api.chat.initparam() with a parameter');
        /* $container = $appenddiv; */
    });
    /* Module Functions */
      
    setjqueryMap = function (){
       
               
    };  
      
    /* --- Setup the API's --- */
    
    return {
        init : function_a,

        /* This one will take a parameter */
        initparam : function_b
    };
 
    

})();







