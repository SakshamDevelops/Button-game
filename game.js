
var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var randomNumber;
var userClickedPattern=[];
var level = 0, toggle = false;

$("body").keydown(function(){
   if(toggle==false){
   nextSequence();
   }
})

function nextSequence(){

   randomNumber = Math.floor(4 * Math.random());
   var randomChosenColor = buttonColors[randomNumber];
   gamePattern.push(randomChosenColor);
   
console.log(gamePattern);

   $("#"+randomChosenColor).fadeOut(50).fadeIn(50);

   playSound(randomChosenColor);
   

   toggle=true;

   $("h1").html("Level "+level);
   level++;
   userClickedPattern = [];

}
 
$(".btn").click(function(){

   let userChosenColor = this.getAttribute("id");
   userClickedPattern.push(userChosenColor);
   console.log(userClickedPattern);


   playSound(userChosenColor);


   animatePress(userChosenColor);


   var currentLevel = userClickedPattern.length - 1;
  
   checkAnswer(currentLevel);

})


function playSound(name){

   var audioColor = new Audio('sounds/'+ name + '.mp3');
   audioColor.play();

}

function animatePress(currentColor){

   $("#"+ currentColor).addClass("pressed");
   
   setTimeout(function(){

       $("#"+ currentColor).removeClass("pressed");

   },100)

}

function checkAnswer(currentLevel){
   
   if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
          
      if(gamePattern.length == userClickedPattern.length)
      {
          
          setTimeout(function(){
             nextSequence();
          },1000)
    
          console.log("Sucs");  
   
      } 

   }
   else{
      console.log("F");

      playSound("wrong");

      $("body").addClass("game-over");
   
      setTimeout(function(){
   
          $("body").removeClass("game-over");
   
      },200)
   
   
      $("h1").html("Game Over, Press any key to Restart");
      
     startOver();

   }
}


function startOver(){

    level = 0;
    gamePattern=[];
    toggle=false;

}