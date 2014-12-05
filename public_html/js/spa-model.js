/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * People model - provides METHODS to linteract the list of people the model maintains
 * Chat_model - provides methods to interact with our instant messaging
 */

people = (function(){
    
    get_user = (function(){});
    
    get_db = (function(){});
    
    get_by_cid = (function(){});
    
    login = (function(){});
    
    logout = (function(){});
    
   /* Public APIs */
   
    return {
      get_user : get_user,
      get_db : get_db,
      get_by_cid : get_by_cid,
      login : login,
      logout : logout
           
    };
    
    
    
});









person = (function (){
    
    
    /* Shell functions to define returns */
    get_is_user = (function(){return true;});
    
    
    get_is_anon = (function(){return true;});
    
    
    
    /* Public API */
    return{
        get_is_user : get_is_user,
        get_is_anon : get_is_anon
        
    }
    
}());