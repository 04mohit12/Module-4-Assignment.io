
 ( function(window){
var byeSpeaker = {}
  byeSpeaker.speakWord= "Good bye";

  byeSpeaker.speak= function(name){
   console.log(byeSpeaker.speakWord + " " + name);
  }
  window.byeSpeaker=byeSpeaker;
  })(window);
