
(function () {

var names = ["Yaakov", "Mohit", "Cristiano Ronaldo", "Messi", "Neymar", "Pep Guardiola", "Phil Foden", "Paula", "Laura", "Jim"];
for (var name in names) {
  var firstLetter = names[name].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}
})();
