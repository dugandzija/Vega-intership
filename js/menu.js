function myFunction() {
    var x = document.getElementById("myNavigation");
    if (x.className === "nav__desktop") {
      x.className += " responsive";
    } else {
      x.className = "nav__desktop";
    }
  }