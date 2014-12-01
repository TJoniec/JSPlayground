/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// can also get rid of the namespace that is declared by va.
var api = (function ($) {
    
    // A slider state of 0 means that the slider is retracted.  A state of 1 means that it is open
    
    
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
    
    /* jQuery representation of DOM elements 
     * 
     * jQueryMap is a cache so that find does not have to be executed over and over again.
     */
    var jqueryMap = {
        $chatSlider : null,
        $searchDiv : null,
        $container : null
    };
    
    
    
    
    drawfunction_a = (function () {
        $('#spa').append("<div class= 'spa-slider'><div> ");
        $('#spa').append("<div class= 'spa-shell-head'><div> ");
        $('#spa').append("<div class= 'spa-shell-head-logo'><div> ");
        $('#spa').append("<div class= 'spa-shell-head-search'><div> ");

    });

    drawfunction_b = (function () {
       jqueryMap.$container.html(configMap.html_template); 
    });
      
    // This is one way to do toggle the slider.  Another way is to check for it's height.
    onclickSliderDebug = (function () {
            console.log('Slider Clicked');
        
         // Find the CSS value and compare it to the configMap
         
         if (configMap.slider_state === 0){
             console.log("State turning to 1");
             $('#spa').find('.spa-slider').height(configMap.extended_height);
             configMap.slider_state = 1;
             return true;
             } else { 
            $('#spa').find('.spa-slider').height(configMap.retracted_height);
            configMap.slider_state = 0; 
            return true;
             };
     });
     
     
     
   onclickSlider = (function () {
                 
         // Find the CSS value and compare it to the configMap
         
         if (configMap.slider_state === 0){
            jqueryMap.$chatSlider.height(configMap.extended_height);
             configMap.slider_state = 1;
             return true;
             } else { 
            jqueryMap.$chatSlider.height(configMap.retracted_height);
            configMap.slider_state = 0; 
            return true;
             };
     });
     
    
        
    // Useful pattern #1  Setting sub container attributes ------------
      
    
    container_associate = (function(){
    // Assigning a css to a variable and then setting attributes.  This is what jQuery is all about
    // This is being found in the DOM
     jqueryMap.$chatSlider = $('#spa').find('.spa-slider');  
        jqueryMap.$chatSlider
            .attr('title', 'This is your Chat Slider Container')
            .click(onclickSlider);
            
        jqueryMap.$searchDiv = $('#spa').find('.spa-shell-head-search');
            jqueryMap.$searchDiv
             .attr('title', 'Enter your Search Criteria');
            
    });
        
    // End Userful Pattern #1 ------------------------------------------
    
    

    // Watch out for order

    api_function_a = (function () {
        jqueryMap.$container = $('#spa');
        drawfunction_a();
        container_associate();
        
        /* Calling another API */
        
        api.chat.init(jqueryMap.$chatSlider);
        api.chat.initparam();
        /* api.playground.init(); */
        
        /* Notice how this is called using the jquery caller */
        /* api.playground.initparam(jqueryMap.$chatSlider); */
     });
    
        
    

    // Now export out the api such that it can be called from the html page without having to have it self execute

    // The return function uses the object notation syntax external name: internal name.  In essence it is a map

    // Expose the APIs...the first api is the simple draw function
    // The second API would be another
    
    
    return {
        startup : api_function_a
        
    };


})(jQuery);


