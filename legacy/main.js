var changingtext = document.getElementById("text_change");
var listofjobs = ["a programmer", "a graphic designer", "a future entreprenuer", "an eager learner", "a HoC fanatic"];

var counter = 0;
var i = setInterval(function(){
    changingtext.innerHTML = listofjobs[counter]+".";
    counter++;
      if (counter > 4) {
        counter = 0;
      }
  }, 1500);
// Develop code for change "class " in header onScroll()