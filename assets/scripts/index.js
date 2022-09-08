window.onscroll = function() {stickElement()};

// Get the navbar
var navbar = document.getElementById("top-navbar");
// console.log(`navBar: ${navbar}`)
var sticky = navbar.offsetTop;

function stickElement() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    // console.log('stickyAdded');
  } else {
    navbar.classList.remove("sticky");
  }
}