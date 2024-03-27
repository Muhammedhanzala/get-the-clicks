let count = 0;

function showAlert() {
  alert(count);
  count++;
}

document.addEventListener('keydown', showAlert);

window.onload = function() {
  count = 0; 
};