
/*plus button*/
var x = document.querySelectorAll(".button-plus");
for ( let i=0; i < x.length ; i++){
    x[i].addEventListener('click', function() {
    x[i].nextElementSibling.innerText++
    totalPrice()
     })
   
}
/*minus button*/
var y = document.querySelectorAll(".button-minus");
for ( let i=0; i < x.length ; i++){
    y[i].addEventListener('click', function() {
        if  ( y[i].previousElementSibling.innerText>0 ) 
    y[i].previousElementSibling.innerText--
    totalPrice()
     }) 
}

/*like button*/
var L = document.querySelectorAll(".button1");
for ( let i=0; i < L.length ; i++) {
L[i].addEventListener('click', function()  {
    if ( L[i].style.backgroundColor==="black")
    { L[i].style.backgroundColor = "red"}
   else {L[i].style.backgroundColor = "black"}
})
}

/*Delete function*/
var D = document.querySelectorAll(".button0"); 
for ( let i=0; i < D.length ; i++) {
    D[i].addEventListener("click",function(){
        D[i].parentElement.parentElement.remove();
        totalPrice();
    })
}

function totalPrice() {
  
    var productPrice = document.getElementsByClassName('price');
    var productQuantity = document.getElementsByClassName('TOT'); 
    var Somme = 0;
    for (let i = 0; i < productPrice.length; i++) {
      Somme += productPrice[i].innerText * productQuantity[i].innerText;
    }
    document.getElementById('sum').innerText = Somme;
  }
  