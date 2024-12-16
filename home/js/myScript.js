function myFunction() {
  document.getElementById("demo").innerHTML = "hi my name is Mark Angelo Alcantara.";
}

function myFunction2() {
  const element = document.getElementsByTagName("p");

  document.getElementById("demo").innerHTML = '<br> I am from BSIT department <br>' + element[0].innerHTML;
  

}