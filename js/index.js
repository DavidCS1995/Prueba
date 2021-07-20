function move() {
  let loader = document.getElementById("loader"); 
  let myBar = document.getElementById("myBar");   
  let width = parseInt(document.getElementById("insertValue").value) || 10;
  let id = setInterval(frame, 10);
  function frame() {
    width++; 
    myBar.style.width = width + '%'; 
    loader.innerHTML = width * 1  + '% to complete';

    if (width >= 100) {
      clearInterval(id);
      loader.innerHTML = 'Completed!'; 
    }
  }
}
  
function remove() {
  let loader = document.getElementById("loader"); 
  let myBar = document.getElementById("myBar");
  let width = parseInt(document.getElementById("insertValue").value) || 100;
  let id = setInterval(frame, 10);
  function frame() {
    width--;
    loader.innerHTML = width * 1 + '% to restore';
    myBar.style.width = width + '%';

    if (width <= 0) {
      clearInterval(id);  
      loader.innerHTML = 'Restored!';         
    }
  }
}