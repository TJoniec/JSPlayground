/* 
 * Purpose:  Learning file for gaining a base understanding taffydb
 *  
 * Calls:  The mock data module containing object literals in spa-fake.js. 
 * 
 * Requires:  Taffy.js
 * 
 * API call:  api.fake.getpeoplelist
 * 
 * Self executing because of return values
 * 
 */

api.fake.taffy = (function (){
    /* Module scope variables */
    
    var getdata, init, thedb, printdata;
        
    /* Function that will init the Taffy DB in memory.  This only has to be done at once */
    
    init=(function(){
        thedb = TAFFY();
         
       /* Need to handle error handling in here or maybe a singleton pattern */ 
        
    });
    
    
    
    
    /* Example function that will fill the already initialized db and insert the object literal */
    getdata = (function(){
     /* Use the pattern to stage the data than use the taffydb.insert function */
     
     /*TO Do: Insert it into thedb */
     
     data = api.fake.getpeoplelist();
     
        
        
    });
     
    printdata=(function(){
        /* Iterate and write to the console */
        console.log('In the print function');
        
        /* Iterate over the db and then perform an console log function against each one */
        /* In other words, traverse the db and apply a function against it */
        
        thedb().each(function(r){
           console.log(r); 
            
            
        });
                
                
                
                
                  
            
       
               
        
    });
    
   
    
    
    
    
    
    
    
    /* Public API Call */
    
    return {getdata: getdata,
            init:init,
            printdata : printdata};        
    
   
    
    
    
})();
