document.addEventListener("DOMContentLoaded", function() {
    ///slider
    const next = document.getElementById('sliderNext');
    const previous = document.getElementById('sliderPrevious');
    const pictures = document.getElementsByClassName('vykres');
    let actualPicture = 0;

    next.onclick = function() {
        if(actualPicture === pictures.length -1){
            pictures[actualPicture].classList.add('hidden');
            actualPicture = 0;
            pictures[actualPicture].classList.remove('hidden');
        }else {
            pictures[actualPicture++].classList.add('hidden');
            pictures[actualPicture].classList.remove('hidden');
        }
      
    }

    previous.onclick = function() {
        if(actualPicture === 0){
            pictures[actualPicture].classList.add('hidden');
            actualPicture = pictures.length -1;
            pictures[actualPicture].classList.remove('hidden');
        }else {
            pictures[actualPicture--].classList.add('hidden');
            pictures[actualPicture].classList.remove('hidden');
        }
      
    }

 });