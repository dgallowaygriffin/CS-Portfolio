// this part of the code grabs the information from the elements and returns them with the specific value into the code
var troye = document.getElementById("troye");
var fe = document.getElementById("fe");
var poke = document.getElementById("poke");
var fan = document.getElementById("fan");
var baby = document.getElementById("baby");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");

// this code means that when you click on the image, the function will take place
// in this case, words will pop up when the user click on the image
troye.addEventListener("click", function(){
    info1.innerHTML = "Troye was born in South Africa and moved to Australia young";
    info2.innerHTML = "His first internet debut was on Youtube with singing videos";
    info3.innerHTML = "He released his debut album on December 4th";
});
                       
fe.addEventListener("click", function(){
    info1.innerHTML = "Fire Emblem started in 1990 by Shouzo Kaga & Gunpei Yokoi";
    info2.innerHTML = "Fire Emblem Awakening was almost the last game in the series";
    info3.innerHTML = "Luckily because of sales, Fire Emblem now has a bright future";
});

poke.addEventListener("click", function(){
    info1.innerHTML = "Pokemon has been around since 1996 in Japan (this one is fennekin)";
    info2.innerHTML = "It has grown to be one of the most well known franchises ever";
    info3.innerHTML = "After 19 games and many spinoffs, Pokemon influences many people";
});

fan.addEventListener("click", function(){
   info1.innerHTML = "Rainbow Rowell, the author of this book, has had a lot of past success";
   info2.innerHTML = "Fangirl is a book about a girl that writes fiction about her fave characters";
   info3.innerHTML = "It expands into a living breathing world that is definitely worth the read";
});

baby.addEventListener("click", function(){
    info1.innerHTML = "Penguins are flightless and aquatic birds that live in cold climates";
    info2.innerHTML = "They spend 75% of their lives in water, even though they're mammals";
    info3.innerHTML = "The biggest population of penguins has 11,654,000 pairs of penguins";
});