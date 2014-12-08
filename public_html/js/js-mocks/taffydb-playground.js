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
    
    var getdata, init, thedb, printdata, products;
        
    
    
    init =(function(){
        /* Method scope variable */
        
        var data;
        
        console.log('In init_embedded function');
          
        /* Pattern to retreive a data from a datastore and print it to the console */
        
        thedb = TAFFY();
        
        /* Callapi the API and return the object literal in a variable */
        
        data = api.fake.getpeoplelist();
        
        /* Insert the data into the TAFFY database */
        
         thedb.insert(data); 
        
        /* Print out the retreived data to the console as a check */
        
        thedb().each(function(thedb,idx){
            console.log(thedb.name, thedb.age);
        });
        
        
              
        console.log('--Exiting init embedded function');
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
    
   printsomething = (function(){
       console.log('Visibility Test');
       
   });
    
    
    
    
    
    
    
    /* Public API Call */
    
    return {getdata: getdata,
            init:init,
            printdata : printdata,
            printsomething : printsomething};        
    
   
    
    
    
})();
