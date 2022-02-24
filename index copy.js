//scroll to top mybutton
// modified from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
window.onload = function()
{
  //Get the button
  var mybutton = document.getElementById("myBtn");
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction(mybutton)};
}

// nav bar
function myFunction()
{
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav")
  {
    x.className += " responsive";
  }
  else
  {
    x.className = "topnav";
  }
}

//scroll to top mybutton
// modified from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
function scrollFunction(mybutton)
{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
  {
    mybutton.style.display = "block";
  }
  else
  {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction()
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
