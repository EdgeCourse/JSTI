window.addEventListener("load", function(){
var showLink = document.querySelector(".showLink");
showLink.addEventListener("click",function(){
  showHide();
  event.preventDefault();
})
var hideLink = document.querySelector(".hideLink");
hideLink.addEventListener("click",function(){
  showHide();
  event.preventDefault();
})
})
function showHide() {
  
    if (document.getElementById('moreless-show').style.display != 'none') {
      document.getElementById('moreless-show').style.display = 'none';
      document.getElementById('moreless').style.display = 'block';
    }
    else {
      document.getElementById('moreless-show').style.display = '';
      document.getElementById('moreless').style.display = 'none';
    }
  
}