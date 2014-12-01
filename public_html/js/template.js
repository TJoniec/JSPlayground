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

api.template = (function () {
   
    /* --- Setup the variables in object literals ----- */
    
    var configMap = {
        slider_state : 0,
        extended_height: 434,
        extended_title: 'Click to Retract',
        retracted_height : 16,
        retracted_title : 'Click to Expand',
        html_template : String()+ 
                "<div class= 'spa-slider'><div> " +
                "<div class= 'spa-shell-head'><div> " +
                "<div class= 'spa-shell-head-logo'><div> " +
                "<div class= 'spa-shell-head-search'><div> "
    }; 
    
    
    
    var jqueryMap = {};
    
    
    function_a = (function () {
        console.log('Successffully Called the api.template.init() function without a parameter');
        
    });
    
    function_b = (function () { 
        console.log('Successfully called the api.template.initparam() with a parameter');
    });
    
      
    /* --- Setup the API's --- */
    
    return {
        init : function_a,

        /* This one will take a parameter */
        initparam : function_b
    };
 
    

})();







