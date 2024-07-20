const div1 = document.querySelector('.double-cards');
const h5Header = document.querySelector('.hFrase');
const audio = new Audio('assets/comoDeveSer.mp3');

//play audio Como deve ser
h5Header.addEventListener('mouseover', ()=>{
    audio.currentTime = 0;
    audio.play();   
})

//Card effects
div1.addEventListener('click', ()=>{
  div1.classList.add('hidden')
  setTimeout(() => {
    div1.style.display = 'none'  
  }, 1000);   
})