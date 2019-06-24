document.querySelector("img").remove();

var words = ["QT", "HAILY ABEL IS GOD", "And I- O O P", "WAA-LNUT", "If you pour the milk before the cereal, ELECTRIC CHAIR!", "scary.gif"]

var button = document.getElementById("clickme");
var scary = document.querySelector("img");

button.addEventListener("click", function(){
  var rand = Math.random()
  var bigger = rand * words.length
  var round = Math.floor(bigger)
  if (words[round] == "scary.gif"){
    console.log("hi");
    document.querySelector("img") = "scary.gif";
  }
  console.log(words[round]);
  document.querySelector("h2").innerHTML = words[round]

})
