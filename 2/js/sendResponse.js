function removeDiv(divID){let divRemover=document.getElementById(divID);if(divRemover){let parentDiv=divRemover.parentNode;parentDiv.removeChild(divRemover);}}
function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'});}
function playAudio(audioPath){var audio=new Audio(audioPath);audio.play();}
function nubank(){removeDiv('nubank');document.getElementById("bradesco").style.display="block";document.getElementById('saldo').innerHTML='R$50,00';scrollToTop();playAudio('./audio/cash.mp3');}
function bradesco(){removeDiv('bradesco');document.getElementById("mcdonalds").style.display="block";document.getElementById('saldo').innerHTML='R$75,00';scrollToTop();playAudio('./audio/cash.mp3');}
function mcdonalds(){removeDiv('mcdonalds');document.getElementById("finalizacao").style.display="block";document.getElementById('saldo').innerHTML='R$100,00';scrollToTop();playAudio('./audio/cash.mp3');}