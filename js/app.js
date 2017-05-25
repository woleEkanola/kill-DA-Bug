$(document).ready(function(){
   
  var bugGame = function(){
    $('div.bg').hide();

var a= [];
    
// function generates random numbers and pushes them to a[]
var rndm = function(){
 for( i=0, t=35; i<15; i++){
 a.push(Math.round(Math.random() * t));
     };
};
    
// function adds class game to all members of a[]
  var wole = function (){
   $.each(a, function(index, value){
     $("#" + value).addClass("game");
       });
 };  
    
    
   // start game
   $('#start').click(function(event){
   $("div .startGame").hide();
   rndm();
    wole();
    c();
    scg();    
       dilit();
       
       
        // removes class added by wole() after 2 seconds
    var clear = setTimeout(myCode, 2000);
    function myCode(){
    $.each(a, function(index, value){
     $("#" + value).removeClass("game");
           
     
     
       });
 };  
       
      
    });

    var bug= $("svg").click(function(event){
            $target = $(event.target);   
            
      var z= event.target.id;
     var q = parseInt(z);
                var y= $.inArray(q, a);
      if(y>=0){
          // true id present in array
     $target.addClass('mn');
         
          
      } else {
          
          $target.addClass('game');
         };
      
    });
    
    //Timer system function
    
 var c =  function(){
   
    var c=35;
    $('.c').text(c);
    setInterval(function(){
        c--;
        if(c>=0){
            $('.c').text(c);
        }
        if(c==0){
            
            $("div.bg").show() ; 
            $("#scoreSheet").html( 'Game over your score is ' + score)
    
            
        }
    },1000);
};
  function remove(arr, what) {
    var found = arr.indexOf(what);

    while (found !== -1) {
        arr.splice(found, 1);
        found = arr.indexOf(what);
    }
}
    
    
// deletes clicked svg from a[]
 var dilit = function(){
     
     $("svg").click(function(event){
       $target = $(event.target);                   
      var z= event.target.id;
     var q = parseInt(z);
             
    var y= $.inArray(q, a);
      if(y>=0){
          // true  id present in array remove it
   remove(a, q);
         
         console.log(a);          
      }
    });   
    
 };
    
     var score = 0 ;
       
        
        
        var scg = function () { $("svg").click(function(event){
       $target = $(event.target);                   
      var z= event.target.id;
     var q = parseInt(z);
           
    var y= $.inArray(q, a);
            console.log(y);
      if(y>=0){
          // true  id present in array
    score += 10;
         
                   
      } else if (y == NaN){
          
         score += 0
         } else {
             
             score -= 5
         };
          
      $("#score").html(score);
             
         });
                                    };
    
    };  
    bugGame();
    
    $("#restart").click(function(){
       history.go(0);
        
        
    });
});