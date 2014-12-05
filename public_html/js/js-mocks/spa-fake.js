/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * This module is used to create fake persons for testing prior to the implementation of the database
 * this module is used by the -- fill in ----
 * 
 * Note that the namespace is the same as the file name (almost)
 * 
 * Takeaways:
 * 1. You do not have to specify the parameters on the return statements
 * 2. How to return an array.
 * 
 */

api.fake = (function() {
    
    var getpeoplelist;
    
   
    /* Note that the function is self executing so that the return statement is initialized 
     * The book actually does not have it as an anonymous function.  Need to investigate why
     * Returning an array of object literals
     */
    
    
    
    
    getpeoplelist = (function(){
        
        console.log('In the fake get people list');
        
        return [
            {name: 'Betty',
             _id: 'id_01',
             css_map: {
                 top:20,
                 left:20,
                 'background-color': 'rgb(128,129,128)'
                 }
                },
            
            {name: 'Mike',
             _id: 'id_02',
             css_map: {
                 top:60,
                 left:20,
                 'background-color': 'rgb(128,255,128)'
                 }
                },
                
            {name: 'Pebbles',
             _id: 'id_03',
             css_map: {
                 top:100,
                 left:20,
                 'background-color': 'rgb(128,192,192)'
                 }
                },
            
            {name: 'Wilma',
             _id: 'id_04',
             css_map: {
                 top:140,
                 left:20,
                 'background-color': 'rgb(192,128,128)'
                 }
                }
            
            
            
        ];
            
        
    });
   
    /* A public API */
    
    return {getpeoplelist : getpeoplelist 
        };
    
})();



